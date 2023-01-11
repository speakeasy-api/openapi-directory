import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { LendingRequests } from "./lendingrequests";
import { Printouts } from "./printouts";
import { RequestedResources } from "./requestedresources";
import { Test } from "./test";


export const ServerList = [
	"https://api-eu.hosted.exlibrisgroup.com",
	"https://api-na.hosted.exlibrisgroup.com",
	"https://api-ap.hosted.exlibrisgroup.com",
	"https://api-cn.hosted.exlibrisgroup.com",
	"https://api-ca.hosted.exlibrisgroup.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.exlibrisgroup.com/alma/apis/ - Detailed documentation on these APIs at the Ex Libris Developer Network.*/
export class SDK {
  public lendingRequests: LendingRequests;
  public printouts: Printouts;
  public requestedResources: RequestedResources;
  public test: Test;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.lendingRequests = new LendingRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.printouts = new Printouts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requestedResources = new RequestedResources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.test = new Test(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Customers } from "./customers";


export const ServerList = [
	"https://unify.apideck.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.apideck.com - Apideck Developer Docs*/
export class SDK {
  public customers: Customers;

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
    
    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
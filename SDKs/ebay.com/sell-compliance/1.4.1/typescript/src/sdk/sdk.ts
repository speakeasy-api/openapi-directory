import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ListingViolation } from "./listingviolation";
import { ListingViolationSummary } from "./listingviolationsummary";


export const ServerList = [
	"https://api.ebay.com{basePath}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public listingViolation: ListingViolation;
  public listingViolationSummary: ListingViolationSummary;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.listingViolation = new ListingViolation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.listingViolationSummary = new ListingViolationSummary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
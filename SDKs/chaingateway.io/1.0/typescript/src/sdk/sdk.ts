import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AddressRequests } from "./addressrequests";
import { InfoRequests } from "./inforequests";
import { SubscriptionIpnRequests } from "./subscriptionipnrequests";
import { TransactionRequests } from "./transactionrequests";


export const ServerList = [
	"https://eu.eth.chaingateway.io/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public addressRequests: AddressRequests;
  public infoRequests: InfoRequests;
  public subscriptionIPNRequests: SubscriptionIpnRequests;
  public transactionRequests: TransactionRequests;

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
    
    this.addressRequests = new AddressRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.infoRequests = new InfoRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptionIPNRequests = new SubscriptionIpnRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactionRequests = new TransactionRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
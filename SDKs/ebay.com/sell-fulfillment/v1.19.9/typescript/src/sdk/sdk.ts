import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Order } from "./order";
import { PaymentDispute } from "./paymentdispute";
import { ShippingFulfillment } from "./shippingfulfillment";


export const ServerList = [
	"https://api.ebay.com{basePath}",
	"https://apiz.ebay.com{basePath}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public order: Order;
  public paymentDispute: PaymentDispute;
  public shippingFulfillment: ShippingFulfillment;

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
    
    this.order = new Order(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentDispute = new PaymentDispute(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shippingFulfillment = new ShippingFulfillment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { FulfillmentPolicy } from "./fulfillmentpolicy";
import { Kyc } from "./kyc";
import { Onboarding } from "./onboarding";
import { PaymentPolicy } from "./paymentpolicy";
import { PaymentsProgram } from "./paymentsprogram";
import { Privilege } from "./privilege";
import { Program } from "./program";
import { RateTable } from "./ratetable";
import { ReturnPolicy } from "./returnpolicy";
import { SalesTax } from "./salestax";


export const ServerList = [
	"https://api.ebay.com{basePath}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public fulfillmentPolicy: FulfillmentPolicy;
  public kyc: Kyc;
  public onboarding: Onboarding;
  public paymentPolicy: PaymentPolicy;
  public paymentsProgram: PaymentsProgram;
  public privilege: Privilege;
  public program: Program;
  public rateTable: RateTable;
  public returnPolicy: ReturnPolicy;
  public salesTax: SalesTax;

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
    
    this.fulfillmentPolicy = new FulfillmentPolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.kyc = new Kyc(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.onboarding = new Onboarding(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentPolicy = new PaymentPolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentsProgram = new PaymentsProgram(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.privilege = new Privilege(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.program = new Program(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rateTable = new RateTable(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.returnPolicy = new ReturnPolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.salesTax = new SalesTax(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
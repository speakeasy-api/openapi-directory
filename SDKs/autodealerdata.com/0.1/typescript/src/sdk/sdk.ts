import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ApplicationAcceleration } from "./applicationacceleration";
import { Authentication } from "./authentication";
import { DealershipData } from "./dealershipdata";
import { Premium } from "./premium";
import { PricingData } from "./pricingdata";
import { ProPlanOrGreater } from "./proplanorgreater";
import { SalesData } from "./salesdata";
import { StandardPlanOrGreater } from "./standardplanorgreater";
import { StaticData } from "./staticdata";
import { SupplyData } from "./supplydata";
import { UltraPlanOrGreater } from "./ultraplanorgreater";
import { VehicleData } from "./vehicledata";


export const ServerList = [
	"https://autodealerdata.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public applicationAcceleration: ApplicationAcceleration;
  public authentication: Authentication;
  public dealershipData: DealershipData;
  public premium: Premium;
  public pricingData: PricingData;
  public proPlanOrGreater: ProPlanOrGreater;
  public salesData: SalesData;
  public standardPlanOrGreater: StandardPlanOrGreater;
  public staticData: StaticData;
  public supplyData: SupplyData;
  public ultraPlanOrGreater: UltraPlanOrGreater;
  public vehicleData: VehicleData;

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
    
    this.applicationAcceleration = new ApplicationAcceleration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authentication = new Authentication(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dealershipData = new DealershipData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.premium = new Premium(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pricingData = new PricingData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.proPlanOrGreater = new ProPlanOrGreater(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.salesData = new SalesData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.standardPlanOrGreater = new StandardPlanOrGreater(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.staticData = new StaticData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.supplyData = new SupplyData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ultraPlanOrGreater = new UltraPlanOrGreater(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vehicleData = new VehicleData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://autodealerdata.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    applicationAcceleration: ApplicationAcceleration;
    authentication: Authentication;
    dealershipData: DealershipData;
    premium: Premium;
    pricingData: PricingData;
    proPlanOrGreater: ProPlanOrGreater;
    salesData: SalesData;
    standardPlanOrGreater: StandardPlanOrGreater;
    staticData: StaticData;
    supplyData: SupplyData;
    ultraPlanOrGreater: UltraPlanOrGreater;
    vehicleData: VehicleData;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}

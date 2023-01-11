import { AxiosInstance } from "axios";
import { DeparturesAndArrivals } from "./departuresandarrivals";
import { FastestAndNextDepartures } from "./fastestandnextdepartures";
import { ServiceInformation } from "./serviceinformation";
export declare const ServerList: readonly ["https://api.departureboard.io/api/v2.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    departuresAndArrivals: DeparturesAndArrivals;
    fastestAndNextDepartures: FastestAndNextDepartures;
    serviceInformation: ServiceInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}

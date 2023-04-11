import { DeparturesAndArrivals } from "./departuresandarrivals";
import { FastestAndNextDepartures } from "./fastestandnextdepartures";
import { ServiceInformation } from "./serviceinformation";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.departureboard.io/api/v2.0"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The departureboard.io is a high performance API written in Golang. Its goal is to provide to main functions:<br><br> (1): A JSON API interface to the legacy National Rail SOAP API: Giving developers the ability to pull live information on departures, arrivals, and services from National Rail, without having to use the legacy SOAP API provided by National Rail. Information is still pulled directly from National Rail in the background, providing the same level of real-time data without the additional complexity of having to interact with SOAP. <br><br>(2): A JSON API interface for additional National Rail information: Giving developers the ability to pull a range of information about the Rail Network, via a JSON API interface. This is not an offering that National Rail currently provide, and is custom developed. Data is sourced from periodically updated XML documents, parsed, and provided for consumption via the departureboard.io API.<br><br>This API is completely free to use for non-commercial purposes. You can explore the various sections of the documentation using the links below.<br><br> For more information please see <a href="https://api.departureboard.io">https://api.departureboard.io</a>
 */
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
    private _globals;
    constructor(props?: SDKProps);
}

import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.bigdatacloud.net"];
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
 * BigDataCloud's IP Geolocation API returns detailed information about the geographical location, ownership and connectivity of the provided IPv4 IP address.
 *
 * @remarks
 *
 * This API is powered by patent-pending ‘Next Generation IP Geolocation Technology'. As a result, the API has sub-millisecond response time.
 *
 * You can authenticate the API with the use of API keys provided in your BigDataCloud account.
 *
 * BigDataCloud provides 10K Free queries per month. You can upgrade your package with $2/month per 10K additional queries.
 *
 * The API has Unprecedented Update Rate
 * - Geolocation data re-evaluated every 2 hours or at least once a day
 * - BGP data updated every 2 hours
 * - Registry data updated at least once a day
 * - Country object data usually updates at least once in a month
 *
 * You can learn more about the API at [bigdatacloud.com](https://www.bigdatacloud.com/ip-geolocation-apis).
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * IP Geolocation with Confidence Area and Hazard Report API
     *
     * @remarks
     * This API returns additional security hazard report in addition to confidence area and locality information.
     */
    ipGeolocationWithConfidenceAreaAndHazardReportApi(req: operations.IpGeolocationWithConfidenceAreaAndHazardReportApiRequest, config?: AxiosRequestConfig): Promise<operations.IpGeolocationWithConfidenceAreaAndHazardReportApiResponse>;
    /**
     * IP Geolocation with Confidence Area API
     *
     * @remarks
     * Returns list of geocoordinates which represents estimated geolocation confidence area.
     */
    ipGeolocationWithConfidenceAreaApi(req: operations.IpGeolocationWithConfidenceAreaApiRequest, config?: AxiosRequestConfig): Promise<operations.IpGeolocationWithConfidenceAreaApiResponse>;
}

import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/wmm"];
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
 *
 * @remarks
 * The World Magnetic Model calculates the intensity and direction of the Earth's magnetic field on a specific date-time, geodetic altitude, latitude, and longitude. It is relied upon throughout the world for navigation, mineral exploration, atmospheric and space science, and is installed on billions of devices.  <br><br>
 * A comprehensive description of the World Magnetic Model, including its  limitations, can be found <a href='https://www.ngdc.noaa.gov/geomag/WMM/'>here</a>.  <br><br>
 * We provide a RESTful API to access the out-of-cycle  World Magnetic Model (WMM2015v2) valid for years 2015.0 - 2020.0 and WMM2020 valid for years 2020.0 - 2025.0<br><br>
 * API requests must contain a key "API-Key" in the header (see code samples). Obtain a key from  <a href='https://developer.amentum.io'>here</a>. <br><br>
 * Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
 * Help us improve the quality of our web APIs by completing our 2 minute survey <a href="https://www.surveymonkey.com/r/CTDTRBN">here</a>.<br><br>
 * Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2021.
 *
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
     * Calculate magnetic declination, inclination, total field intensity, and grid variation
     *
     *
     * @remarks
     * at specified conditions.
     *
     */
    appApiWMMEndpointsWMMMagneticField(req: operations.AppApiWMMEndpointsWMMMagneticFieldRequest, config?: AxiosRequestConfig): Promise<operations.AppApiWMMEndpointsWMMMagneticFieldResponse>;
}

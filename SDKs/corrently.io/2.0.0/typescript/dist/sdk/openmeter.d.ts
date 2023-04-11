import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Alternative access to OpenMeter Data.
 */
export declare class OpenMETER {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * @remarks
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
     */
    omActivities(config?: AxiosRequestConfig): Promise<operations.OmActivitiesResponse>;
    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * @remarks
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
     */
    omMeters(config?: AxiosRequestConfig): Promise<operations.OmMetersResponse>;
    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * @remarks
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
     */
    omReadings(config?: AxiosRequestConfig): Promise<operations.OmReadingsResponse>;
}

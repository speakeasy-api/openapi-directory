import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Info {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Artifact formats
     *
     * @remarks
     * List the available artifact formats
     */
    getArtifactFormats(config?: AxiosRequestConfig): Promise<operations.GetArtifactFormatsResponse>;
    /**
     * Recent changes
     *
     * @remarks
     * The Contribly change log.
     */
    getChangeLog(config?: AxiosRequestConfig): Promise<operations.GetChangeLogResponse>;
    /**
     * Event types
     *
     * @remarks
     * List available notification event types
     */
    getEventTypes(config?: AxiosRequestConfig): Promise<operations.GetEventTypesResponse>;
}

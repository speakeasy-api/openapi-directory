import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Webcam' entry type
 */
export declare class TypeTypeImageWebcam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Webcam' entry type
     *
     * @remarks
     * API to search for entries of type Webcam
     */
    searchTypeImageWebcam(req: operations.SearchTypeImageWebcamRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageWebcamResponse>;
}

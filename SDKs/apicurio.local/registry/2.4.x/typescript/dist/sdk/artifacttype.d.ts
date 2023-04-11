import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ArtifactType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List artifact types
     *
     * @remarks
     * Gets a list of all the configured artifact types.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    listArtifactTypes(config?: AxiosRequestConfig): Promise<operations.ListArtifactTypesResponse>;
}

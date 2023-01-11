import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Content {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContentAspectId - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
    **/
    getContentAspectId(req: operations.GetContentAspectIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContentAspectIdResponse>;
    /**
     * getContentAspectIdCivixDocumentId - Lists the metadata available for the specified index or directory from the BCLaws legislative respository
    **/
    getContentAspectIdCivixDocumentId(req: operations.GetContentAspectIdCivixDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContentAspectIdCivixDocumentIdResponse>;
}

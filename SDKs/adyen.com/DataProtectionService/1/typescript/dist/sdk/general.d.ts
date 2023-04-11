import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Submit a Subject Erasure Request.
     *
     * @remarks
     * Sends the PSP reference containing the shopper data that should be deleted.
     */
    postRequestSubjectErasure(req: shared.SubjectErasureByPspReferenceRequest, security: operations.PostRequestSubjectErasureSecurity, config?: AxiosRequestConfig): Promise<operations.PostRequestSubjectErasureResponse>;
}

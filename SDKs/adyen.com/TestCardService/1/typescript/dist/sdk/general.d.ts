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
     * Creates one or more test card ranges.
     *
     * @remarks
     * Creates one or more test card ranges.
     */
    postCreateTestCardRanges(req: shared.CreateTestCardRangesRequest, security: operations.PostCreateTestCardRangesSecurity, config?: AxiosRequestConfig): Promise<operations.PostCreateTestCardRangesResponse>;
}

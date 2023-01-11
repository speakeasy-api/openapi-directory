import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://crediwatch.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * statusCallApiV1StatusCallGet - Status Call
    **/
    statusCallApiV1StatusCallGet(req: operations.StatusCallApiV1StatusCallGetRequest, config?: AxiosRequestConfig): Promise<operations.StatusCallApiV1StatusCallGetResponse>;
    /**
     * statusSkuApiV1StatusSkuGet - Status Sku
    **/
    statusSkuApiV1StatusSkuGet(req: operations.StatusSkuApiV1StatusSkuGetRequest, config?: AxiosRequestConfig): Promise<operations.StatusSkuApiV1StatusSkuGetResponse>;
    /**
     * verifyBusinessApiV1VerifyPhoneGet - Verify Business
    **/
    verifyBusinessApiV1VerifyPhoneGet(req: operations.VerifyBusinessApiV1VerifyPhoneGetRequest, config?: AxiosRequestConfig): Promise<operations.VerifyBusinessApiV1VerifyPhoneGetResponse>;
    /**
     * verifyNameApiV1VerifyNameGet - Verify Name
    **/
    verifyNameApiV1VerifyNameGet(req: operations.VerifyNameApiV1VerifyNameGetRequest, config?: AxiosRequestConfig): Promise<operations.VerifyNameApiV1VerifyNameGetResponse>;
    /**
     * verifySkuApiV1VerifySkuGet - Verify Sku
    **/
    verifySkuApiV1VerifySkuGet(req: operations.VerifySkuApiV1VerifySkuGetRequest, config?: AxiosRequestConfig): Promise<operations.VerifySkuApiV1VerifySkuGetResponse>;
}

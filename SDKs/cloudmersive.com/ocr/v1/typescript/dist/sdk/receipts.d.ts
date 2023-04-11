import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Receipts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert a photo of a receipt into a CSV file containing structured information from the receipt
     *
     * @remarks
     * Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.
     */
    receiptsPhotoToCSV(req: operations.ReceiptsPhotoToCSVRequestBody, security: operations.ReceiptsPhotoToCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ReceiptsPhotoToCSVResponse>;
}

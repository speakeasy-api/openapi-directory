import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Receipts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * receiptsPhotoToCsv - Convert a photo of a receipt into a CSV file containing structured information from the receipt
     *
     * Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.
    **/
    receiptsPhotoToCsv(req: operations.ReceiptsPhotoToCsvRequest, config?: AxiosRequestConfig): Promise<operations.ReceiptsPhotoToCsvResponse>;
}

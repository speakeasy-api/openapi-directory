import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DocumentBlock {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listDocumentBlock - List all document blocks
     *
     * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
    **/
    listDocumentBlock(req: operations.ListDocumentBlockRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentBlockResponse>;
}

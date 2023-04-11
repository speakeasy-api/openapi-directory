import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * DocumentBlock object represents your invoice pad.
 */
export declare class DocumentBlock {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all document blocks
     *
     * @remarks
     * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
     */
    listDocumentBlock(req: operations.ListDocumentBlockRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentBlockResponse>;
}

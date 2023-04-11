import { ImageOcr } from "./imageocr";
import { PdfOcr } from "./pdfocr";
import { Preprocessing } from "./preprocessing";
import { Receipts } from "./receipts";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.cloudmersive.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.
 */
export declare class SDK {
    imageOcr: ImageOcr;
    pdfOcr: PdfOcr;
    preprocessing: Preprocessing;
    receipts: Receipts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}

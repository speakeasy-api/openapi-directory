import { AxiosInstance } from "axios";
import { ImageOcr } from "./imageocr";
import { PdfOcr } from "./pdfocr";
import { Preprocessing } from "./preprocessing";
import { Receipts } from "./receipts";
export declare const ServerList: readonly ["https://api.cloudmersive.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}

import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { HeadlessChrome } from "./headlesschrome";
import { LibreOffice } from "./libreoffice";
import { MergeCombinePdfs } from "./mergecombinepdfs";
import { ZxingZebraCrossingBarCodes } from "./zxingzebracrossingbarcodes";
import { Wkhtmltopdf } from "./wkhtmltopdf";
export declare const ServerList: readonly ["https://v2018.api2pdf.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    headlessChrome: HeadlessChrome;
    libreOffice: LibreOffice;
    mergeCombinePdfs: MergeCombinePdfs;
    zxingZebraCrossingBarCodes: ZxingZebraCrossingBarCodes;
    wkhtmltopdf: Wkhtmltopdf;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}

import { HeadlessChrome } from "./headlesschrome";
import { LibreOffice } from "./libreoffice";
import { MergeCombinePdfs } from "./mergecombinepdfs";
import * as shared from "./models/shared";
import { Wkhtmltopdf } from "./wkhtmltopdf";
import { ZXINGZebraCrossingBarCodes } from "./zxingzebracrossingbarcodes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://v2018.api2pdf.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 *
 * @remarks
 * # Introduction
 * [Api2Pdf](https://www.api2pdf.com) is a powerful PDF generation API with no rate limits or file size constraints. Api2Pdf runs on AWS Lambda, a serverless architecture powered by Amazon to scale to millions of requests while being up to 90% cheaper than alternatives. **Supports wkhtmltopdf, Headless Chrome, LibreOffice, and PDF Merge.** You can also generate barcodes with ZXING (Zebra Crossing).
 * # SDKs & Client Libraries
 * We've made a number of open source libraries available for the API
 * - Python: [https://github.com/api2pdf/api2pdf.python](https://github.com/api2pdf/api2pdf.python)
 * - .NET: [https://github.com/api2pdf/api2pdf.dotnet](https://github.com/api2pdf/api2pdf.dotnet)
 * - Nodejs: [https://github.com/api2pdf/api2pdf.node](https://github.com/api2pdf/api2pdf.node)
 * - PHP: [https://github.com/Api2Pdf/api2pdf.php](https://github.com/Api2Pdf/api2pdf.php)
 * - Ruby: (Coming soon)
 * # Authorization
 * Create an account at [portal.api2pdf.com](https://portal.api2pdf.com/register) to get an API key.
 *
 * **Authorize your API calls**
 * - GET requests, include apikey=YOUR-API-KEY as a query string parameter
 * - POST requests, add **Authorization** to your header.
 * ``` Authorization: YOUR-API-KEY ```
 *
 * # Quickstart
 * If you are looking for just a quick call to grab PDFs of a URL, you can do a GET request like:
 * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
 *
 * For more advanced usage and settings, see the API specification below.
 *
 *
 * @see {@link https://www.api2pdf.com} - Find out more about Api2Pdf
 */
export declare class SDK {
    headlessChrome: HeadlessChrome;
    libreOffice: LibreOffice;
    mergeCombinePdfs: MergeCombinePdfs;
    zxingZebraCrossingBarCodes: ZXINGZebraCrossingBarCodes;
    wkhtmltopdf: Wkhtmltopdf;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}

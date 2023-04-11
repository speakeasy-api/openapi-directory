import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HeadlessChrome {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert raw HTML to PDF
     *
     * @remarks
     * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
     */
    chromeFromHtmlPost(req: shared.ChromeHtmlToPdfRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromHtmlPostResponse>;
    /**
     * Convert URL to PDF
     *
     * @remarks
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
     */
    chromeFromUrlGET(req: operations.ChromeFromUrlGETRequest, security: operations.ChromeFromUrlGETSecurity, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlGETResponse>;
    /**
     * Convert URL to PDF
     *
     * @remarks
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
     */
    chromeFromUrlPost(req: shared.ChromeUrlToPdfRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlPostResponse>;
}

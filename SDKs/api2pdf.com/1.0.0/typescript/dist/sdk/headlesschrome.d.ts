import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HeadlessChrome {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromeFromHtmlPost - Convert raw HTML to PDF
     *
     * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    chromeFromHtmlPost(req: operations.ChromeFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromHtmlPostResponse>;
    /**
     * chromeFromUrlGet - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    chromeFromUrlGet(req: operations.ChromeFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlGetResponse>;
    /**
     * chromeFromUrlPost - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    chromeFromUrlPost(req: operations.ChromeFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlPostResponse>;
}

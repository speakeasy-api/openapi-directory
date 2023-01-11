import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Wkhtmltopdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * wkhtmltopdfFromHtmlPost - Convert raw HTML to PDF
     *
     * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    wkhtmltopdfFromHtmlPost(req: operations.WkhtmltopdfFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromHtmlPostResponse>;
    /**
     * wkhtmltopdfFromUrlGet - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    wkhtmltopdfFromUrlGet(req: operations.WkhtmltopdfFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlGetResponse>;
    /**
     * wkhtmltopdfFromUrlPost - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    wkhtmltopdfFromUrlPost(req: operations.WkhtmltopdfFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlPostResponse>;
}

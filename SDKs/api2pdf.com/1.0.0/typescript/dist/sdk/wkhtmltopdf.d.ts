import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Wkhtmltopdf {
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
     * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
     */
    wkhtmltopdfFromHtmlPost(req: shared.WkHtmlToPdfHtmlToPdfRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromHtmlPostResponse>;
    /**
     * Convert URL to PDF
     *
     * @remarks
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ```
     */
    wkhtmltopdfFromUrlGET(req: operations.WkhtmltopdfFromUrlGETRequest, security: operations.WkhtmltopdfFromUrlGETSecurity, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlGETResponse>;
    /**
     * Convert URL to PDF
     *
     * @remarks
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
     */
    wkhtmltopdfFromUrlPost(req: shared.WkHtmlToPdfUrlToPdfRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlPostResponse>;
}

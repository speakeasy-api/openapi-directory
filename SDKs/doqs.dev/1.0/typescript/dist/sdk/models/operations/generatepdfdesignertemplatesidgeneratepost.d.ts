import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneratePdfDesignerTemplatesIdGeneratePostRequest extends SpeakeasyBase {
    generatePDFPayload: shared.GeneratePDFPayload;
    id: string;
}
export declare class GeneratePdfDesignerTemplatesIdGeneratePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    generatePdfDesignerTemplatesIdGeneratePost200ApplicationJSONAny?: any;
}

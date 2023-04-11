import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendDocumentRequest extends SpeakeasyBase {
    /**
     * List of email-s where you want to send the invoice.
     */
    sendDocument?: shared.SendDocument;
    id: number;
}
export declare class SendDocumentResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * List of email adresses where the invoice sent.
     */
    sendDocument?: shared.SendDocument;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}

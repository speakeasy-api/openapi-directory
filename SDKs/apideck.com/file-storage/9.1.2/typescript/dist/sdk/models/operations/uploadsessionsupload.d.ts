import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UploadSessionsUploadServerList: readonly ["https://upload.apideck.com"];
export declare class UploadSessionsUploadSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class UploadSessionsUploadRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    /**
     * The RFC3230 message digest of the uploaded part. Only required for the Box connector. More information on the Box API docs [here](https://developer.box.com/reference/put-files-upload-sessions-id/#param-digest)
     */
    digest?: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * Part number of the file part being uploaded.
     */
    partNumber: number;
    /**
     * Include raw response. Mostly used for debugging purposes
     */
    raw?: boolean;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
    /**
     * ID of the consumer which you want to get or push data from
     */
    xApideckConsumerId: string;
    /**
     * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
     */
    xApideckServiceId?: string;
}
export declare class UploadSessionsUploadResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * The specified resource was not found
     */
    notFoundResponse?: shared.NotFoundResponse;
    /**
     * Payment Required
     */
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
    /**
     * Unexpected error
     */
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    /**
     * Unprocessable
     */
    unprocessableResponse?: shared.UnprocessableResponse;
    /**
     * UploadSessions
     */
    updateUploadSessionResponse?: shared.UpdateUploadSessionResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetIdResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Success response
     */
    id?: shared.Id;
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

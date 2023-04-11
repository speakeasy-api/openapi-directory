import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPartnerRequest extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListPartnerResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Success response
     */
    partnerList?: shared.PartnerList;
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

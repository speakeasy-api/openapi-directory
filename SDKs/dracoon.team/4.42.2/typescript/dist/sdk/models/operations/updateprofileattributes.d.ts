import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProfileAttributesRequest extends SpeakeasyBase {
    profileAttributesRequest: shared.ProfileAttributesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateProfileAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK **(DEPRECATED: WILL BE REPLACED BY 204: "No content")**
     */
    profileAttributes?: shared.ProfileAttributes;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetProfileAttributesRequest extends SpeakeasyBase {
    profileAttributesRequest: shared.ProfileAttributesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SetProfileAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    profileAttributes?: shared.ProfileAttributes;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

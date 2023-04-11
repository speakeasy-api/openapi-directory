import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestGuestUsersPoliciesConfigRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestGuestUsersPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    guestUsersPoliciesConfig?: shared.GuestUsersPoliciesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeGuestUsersPoliciesConfigRequest extends SpeakeasyBase {
    updateGuestUsersPoliciesConfig: shared.UpdateGuestUsersPoliciesConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangeGuestUsersPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    guestUsersPoliciesConfig?: shared.GuestUsersPoliciesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

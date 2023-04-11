import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    loginResponse?: shared.LoginResponse;
    /**
     * Precondition Failed
     */
    radiusChallengeResponse?: shared.RadiusChallengeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

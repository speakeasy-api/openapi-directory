import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendVerificationCodeToCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SendVerificationCodeToCallerIdRequest extends SpeakeasyBase {
    /**
     * A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
     */
    callerid: string;
}
export declare class SendVerificationCodeToCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

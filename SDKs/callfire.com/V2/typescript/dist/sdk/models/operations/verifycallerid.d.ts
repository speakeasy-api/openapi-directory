import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class VerifyCallerIdRequest extends SpeakeasyBase {
    /**
     * request
     */
    callerIdVerificationRequest?: shared.CallerIdVerificationRequest;
    /**
     * A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
     */
    callerid: string;
}
export declare class VerifyCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    verifyCallerId200ApplicationJSONBoolean?: boolean;
}

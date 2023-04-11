import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestEmergencyMfaCodeRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    userId: number;
}
export declare class RequestEmergencyMfaCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    emergencyMfaCodeResponse?: shared.EmergencyMfaCodeResponse;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

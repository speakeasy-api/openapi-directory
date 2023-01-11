import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyOtpIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class VerifyOtpId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class VerifyOtpId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class VerifyOtpIdRequest extends SpeakeasyBase {
    request?: any;
    security: VerifyOtpIdSecurity;
}
export declare class VerifyOtpIdResponse extends SpeakeasyBase {
    contentType: string;
    demoAuthVerifyResponse?: any;
    statusCode: number;
    verifyOTPId400ApplicationJSONOneOf?: any;
    verifyOTPId401ApplicationJSONObject?: VerifyOtpId401ApplicationJson;
    verifyOTPId500ApplicationJSONObject?: VerifyOtpId500ApplicationJson;
}

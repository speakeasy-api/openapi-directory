import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SignUpIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class SignUpId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class SignUpId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class SignUpIdRequest extends SpeakeasyBase {
    request?: any;
    security: SignUpIdSecurity;
}
export declare class SignUpIdResponse extends SpeakeasyBase {
    contentType: string;
    demoAuthResponse?: any;
    signUPId400ApplicationJSONOneOf?: any;
    signUPId401ApplicationJSONObject?: SignUpId401ApplicationJson;
    signUPId500ApplicationJSONObject?: SignUpId500ApplicationJson;
    statusCode: number;
}

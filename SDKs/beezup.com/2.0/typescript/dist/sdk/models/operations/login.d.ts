import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoginRequest extends SpeakeasyBase {
    request: shared.LoginRequest;
}
export declare class LoginResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    apiCredentials?: shared.ApiCredentials;
}

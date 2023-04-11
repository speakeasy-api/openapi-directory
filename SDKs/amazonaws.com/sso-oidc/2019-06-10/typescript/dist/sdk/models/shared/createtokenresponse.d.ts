import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateTokenResponse extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    idToken?: string;
    refreshToken?: string;
    tokenType?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The token.
 */
export declare class EeCreateTokenResponse extends SpeakeasyBase {
    /**
     * The authentication token for later use to call EE endpoints.
     */
    accessToken?: string;
    expiresIn?: number;
    tokenType?: string;
}

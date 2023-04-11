import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auth token restrictions
 */
export declare class AuthTokenRestrictions extends SpeakeasyBase {
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Restricted OAuth access token validity (in seconds)
     */
    accessTokenValidity?: number;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Restricted OAuth refresh token validity (in seconds)
     */
    refreshTokenValidity?: number;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Defines if OAuth token restrictions are enabled
     */
    restrictionEnabled?: boolean;
}

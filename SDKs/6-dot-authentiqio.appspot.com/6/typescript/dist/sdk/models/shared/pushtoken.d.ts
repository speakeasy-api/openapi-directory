import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PushToken in JWT format, self-signed.
 *
 * @remarks
 *
 */
export declare class PushToken extends SpeakeasyBase {
    /**
     * audience (URI)
     */
    aud: string;
    exp?: number;
    iat?: number;
    /**
     * issuer (URI)
     */
    iss: string;
    nbf?: number;
    /**
     * UUID and public signing key
     */
    sub: string;
}

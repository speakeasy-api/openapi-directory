import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentiq ID in JWT format, self-signed.
 *
 * @remarks
 *
 */
export declare class AuthentiqID extends SpeakeasyBase {
    /**
     * device token for push messages
     */
    devtoken?: string;
    /**
     * UUID and public signing key
     */
    sub: string;
}

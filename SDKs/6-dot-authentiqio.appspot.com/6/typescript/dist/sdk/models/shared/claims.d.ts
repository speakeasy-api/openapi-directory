import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Claim in JWT format, self- or issuer-signed.
 *
 * @remarks
 *
 */
export declare class Claims extends SpeakeasyBase {
    email?: string;
    phone?: string;
    /**
     * claim scope
     */
    scope: string;
    /**
     * UUID
     */
    sub: string;
    type?: string;
}

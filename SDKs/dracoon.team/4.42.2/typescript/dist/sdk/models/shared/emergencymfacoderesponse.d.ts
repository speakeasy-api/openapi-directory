import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Emergency TOTP code
 */
export declare class EmergencyMfaCodeResponse extends SpeakeasyBase {
    /**
     * Emergency TOTP code which can be used instead of standard TOTP code
     */
    code: string;
}

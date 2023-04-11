import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.
 */
export declare class SoftwareTokenMfaSettingsType extends SpeakeasyBase {
    enabled?: boolean;
    preferredMfa?: boolean;
}

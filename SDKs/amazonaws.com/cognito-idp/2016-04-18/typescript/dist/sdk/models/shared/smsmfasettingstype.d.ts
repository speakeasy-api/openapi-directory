import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.
 */
export declare class SMSMfaSettingsType extends SpeakeasyBase {
    enabled?: boolean;
    preferredMfa?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { MfaSetupStatus } from "./mfasetupstatus";
/**
 * Contains information about the user's MFA status
 */
export declare class UserMfaStatusResponse extends SpeakeasyBase {
    /**
     * Determines whether multi-factor authentication is enforced
     */
    mfaEnforced: boolean;
    /**
     * Information about the second factor authentication method setup by the user
     */
    mfaSetups: MfaSetupStatus[];
}

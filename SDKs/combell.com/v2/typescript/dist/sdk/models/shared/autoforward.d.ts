import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the auto-forward information.
 */
export declare class AutoForward extends SpeakeasyBase {
    /**
     * Copy to myself
     */
    copyToMyself?: boolean;
    /**
     * E-mail addresses to which e-mails are forwarded
     */
    emailAddresses?: string[];
    /**
     * Enabled
     */
    enabled?: boolean;
}

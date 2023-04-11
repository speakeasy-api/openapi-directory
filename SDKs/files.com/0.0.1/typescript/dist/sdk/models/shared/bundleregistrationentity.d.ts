import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Bundle Registrations
 */
export declare class BundleRegistrationEntity extends SpeakeasyBase {
    /**
     * Bundle URL code
     */
    bundleCode?: string;
    /**
     * Id of associated bundle
     */
    bundleId?: number;
    /**
     * Id of associated bundle recipient
     */
    bundleRecipientId?: number;
    /**
     * Clickwrap text that was shown to the registrant
     */
    clickwrapBody?: string;
    /**
     * Registration cookie code
     */
    code?: string;
    /**
     * Registrant company name
     */
    company?: string;
    /**
     * Registration creation date/time
     */
    createdAt?: Date;
    /**
     * Registrant email address
     */
    email?: string;
    /**
     * Data for form field set with form field ids as keys and user data as values
     */
    formFieldData?: Record<string, any>;
    /**
     * Id of associated form field set
     */
    formFieldSetId?: number;
    /**
     * InboxRegistration cookie code, if there is an associated InboxRegistration
     */
    inboxCode?: string;
    /**
     * Registrant IP Address
     */
    ip?: string;
    /**
     * Registrant name
     */
    name?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Inbox Registrations
 */
export declare class InboxRegistrationEntity extends SpeakeasyBase {
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
     * Id of associated inbox
     */
    inboxId?: number;
    /**
     * Id of associated inbox recipient
     */
    inboxRecipientId?: number;
    /**
     * Title of associated inbox
     */
    inboxTitle?: string;
    /**
     * Registrant name
     */
    name?: string;
}

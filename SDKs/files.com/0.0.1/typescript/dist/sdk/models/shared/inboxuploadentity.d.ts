import { SpeakeasyBase } from "../../../internal/utils";
import { InboxRegistrationEntity } from "./inboxregistrationentity";
/**
 * List Inbox Uploads
 */
export declare class InboxUploadEntity extends SpeakeasyBase {
    /**
     * Upload date/time
     */
    createdAt?: Date;
    /**
     * List Inbox Registrations
     */
    inboxRegistration?: InboxRegistrationEntity;
    /**
     * Upload path
     */
    path?: string;
}

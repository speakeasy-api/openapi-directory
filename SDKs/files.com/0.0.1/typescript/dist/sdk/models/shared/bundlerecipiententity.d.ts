import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Bundle Recipients
 */
export declare class BundleRecipientEntity extends SpeakeasyBase {
    /**
     * The recipient's company.
     */
    company?: string;
    /**
     * The recipient's name.
     */
    name?: string;
    /**
     * A note sent to the recipient with the bundle.
     */
    note?: string;
    /**
     * The recipient's email address.
     */
    recipient?: string;
    /**
     * When the Bundle was shared with this recipient.
     */
    sentAt?: Date;
}

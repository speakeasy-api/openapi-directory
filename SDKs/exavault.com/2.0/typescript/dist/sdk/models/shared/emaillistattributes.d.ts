import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information for the email list, including its short title and recipient emails
 */
export declare class EmailListAttributes extends SpeakeasyBase {
    /**
     * Created datetime
     */
    created?: Date;
    /**
     * Recipient emails in the email list
     */
    emails?: string[];
    /**
     * Modified datetime
     */
    modified?: Date;
    /**
     * Short title for email list
     */
    name?: string;
}

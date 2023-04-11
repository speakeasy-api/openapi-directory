import { SpeakeasyBase } from "../../../internal/utils";
import { EmailListAttributes } from "./emaillistattributes";
import { EmailListRelationships } from "./emaillistrelationships";
/**
 * A single email group list
 */
export declare class EmailList extends SpeakeasyBase {
    /**
     * Information for the email list, including its short title and recipient emails
     */
    attributes?: EmailListAttributes;
    /**
     * ID of the email list
     */
    id?: number;
    /**
     * Related record summary info
     */
    relationships?: EmailListRelationships;
    /**
     * Type of record. "emailList"
     */
    type?: string;
}

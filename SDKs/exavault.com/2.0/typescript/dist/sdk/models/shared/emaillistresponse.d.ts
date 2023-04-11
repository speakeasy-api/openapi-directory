import { SpeakeasyBase } from "../../../internal/utils";
import { EmailList } from "./emaillist";
import { User } from "./user";
/**
 * Response object for a single email list.
 */
export declare class EmailListResponse extends SpeakeasyBase {
    /**
     * A single email group list
     */
    data?: EmailList;
    included?: User[];
    /**
     * Http Status code
     */
    responseStatus?: number;
}

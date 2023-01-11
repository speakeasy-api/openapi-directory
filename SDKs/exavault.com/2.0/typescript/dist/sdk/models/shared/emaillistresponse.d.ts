import { SpeakeasyBase } from "../../../internal/utils";
import { EmailList } from "./emaillist";
import { User } from "./user";
/**
 * Response object for a single email list.
**/
export declare class EmailListResponse extends SpeakeasyBase {
    data?: EmailList;
    included?: User[];
    responseStatus?: number;
}

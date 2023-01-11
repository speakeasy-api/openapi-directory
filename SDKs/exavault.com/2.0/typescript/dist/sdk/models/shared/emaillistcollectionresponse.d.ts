import { SpeakeasyBase } from "../../../internal/utils";
import { EmailList } from "./emaillist";
import { User } from "./user";
/**
 * Response object for list of email lists
**/
export declare class EmailListCollectionResponse extends SpeakeasyBase {
    data?: EmailList[];
    included?: User[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}

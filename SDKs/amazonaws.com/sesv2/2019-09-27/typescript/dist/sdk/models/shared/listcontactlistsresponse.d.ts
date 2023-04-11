import { SpeakeasyBase } from "../../../internal/utils";
import { ContactList } from "./contactlist";
/**
 * Success
 */
export declare class ListContactListsResponse extends SpeakeasyBase {
    contactLists?: ContactList[];
    nextToken?: string;
}

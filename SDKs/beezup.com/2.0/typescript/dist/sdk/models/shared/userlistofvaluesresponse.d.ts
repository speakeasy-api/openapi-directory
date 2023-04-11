import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonListOfValueItem } from "./beezupcommonlistofvalueitem";
import { UserListOfValuesResponseLinks } from "./userlistofvaluesresponselinks";
/**
 * The list of values
 */
export declare class UserListOfValuesResponse extends SpeakeasyBase {
    items?: BeezUPCommonListOfValueItem[];
    links?: UserListOfValuesResponseLinks;
}

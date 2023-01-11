import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonListOfValueItem } from "./beezupcommonlistofvalueitem";
import { UserListOfValuesResponseLinks } from "./userlistofvaluesresponselinks";
export declare class UserListOfValuesResponse extends SpeakeasyBase {
    items?: BeezUpCommonListOfValueItem[];
    links?: UserListOfValuesResponseLinks;
}

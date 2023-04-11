import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetUserListOfValuesLink } from "./linksgetuserlistofvalueslink";
import { LinksGetUserLovIndexLink } from "./linksgetuserlovindexlink";
export declare class UserLovIndexLinks extends SpeakeasyBase {
    /**
     * List of lov link. The key is the list name.
     */
    lists?: Record<string, LinksGetUserListOfValuesLink>;
    self?: LinksGetUserLovIndexLink;
}

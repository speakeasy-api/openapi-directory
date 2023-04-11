import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";
import { LinksGetPublicLovIndexLink } from "./linksgetpubliclovindexlink";
export declare class PublicLovIndexLinks extends SpeakeasyBase {
    /**
     * List of lov link. The key is the list name.
     */
    lists?: Record<string, LinksGetPublicListOfValuesLink>;
    self?: LinksGetPublicLovIndexLink;
}

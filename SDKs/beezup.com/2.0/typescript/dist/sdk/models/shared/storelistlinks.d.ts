import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateStoreLink } from "./linkscreatestorelink";
import { LinksGetStoresLink } from "./linksgetstoreslink";
/**
 * The action links you can do globally on stores
 */
export declare class StoreListLinks extends SpeakeasyBase {
    createStore?: LinksCreateStoreLink;
    self?: LinksGetStoresLink;
}

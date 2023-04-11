import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteStoreLink } from "./linksdeletestorelink";
import { LinksGetStoreLink } from "./linksgetstorelink";
import { LinksGetStoreSharesLink } from "./linksgetstoreshareslink";
import { LinksShareStoreLink } from "./linkssharestorelink";
import { LinksUpdateStoreLink } from "./linksupdatestorelink";
/**
 * The action links for this store
 */
export declare class StoreLinks extends SpeakeasyBase {
    deleteStore?: LinksDeleteStoreLink;
    self?: LinksGetStoreLink;
    share?: LinksShareStoreLink;
    shares?: LinksGetStoreSharesLink;
    updateStore?: LinksUpdateStoreLink;
}

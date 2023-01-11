import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteStoreLink } from "./linksdeletestorelink";
import { LinksGetStoreLink } from "./linksgetstorelink";
import { LinksShareStoreLink } from "./linkssharestorelink";
import { LinksGetStoreSharesLink } from "./linksgetstoreshareslink";
import { LinksUpdateStoreLink } from "./linksupdatestorelink";



// StoreLinks
/** 
 * The action links for this store
**/
export class StoreLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteStore" })
  deleteStore?: LinksDeleteStoreLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetStoreLink;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: LinksShareStoreLink;

  @SpeakeasyMetadata({ data: "json, name=shares" })
  shares?: LinksGetStoreSharesLink;

  @SpeakeasyMetadata({ data: "json, name=updateStore" })
  updateStore?: LinksUpdateStoreLink;
}

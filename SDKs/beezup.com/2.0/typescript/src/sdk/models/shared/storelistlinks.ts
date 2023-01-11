import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateStoreLink } from "./linkscreatestorelink";
import { LinksGetStoresLink } from "./linksgetstoreslink";



// StoreListLinks
/** 
 * The action links you can do globally on stores
**/
export class StoreListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createStore" })
  createStore?: LinksCreateStoreLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetStoresLink;
}

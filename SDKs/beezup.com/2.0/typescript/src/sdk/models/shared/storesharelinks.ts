import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteStoreShareLink } from "./linksdeletestoresharelink";



// StoreShareLinks
/** 
 * The different actions you can make on this store share
**/
export class StoreShareLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteShare" })
  deleteShare?: LinksDeleteStoreShareLink;
}

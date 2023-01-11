import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";



// CollectionModification
/** 
 * Edit the collection metadata
**/
export class CollectionModification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CollectionPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

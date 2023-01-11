import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";



export class CollectionCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: CollectionPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

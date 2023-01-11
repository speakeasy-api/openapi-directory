import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetStoreSharesLink } from "./linksgetstoreshareslink";
import { LinksShareStoreLink } from "./linkssharestorelink";



export class StoreSharesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetStoreSharesLink;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: LinksShareStoreLink;
}

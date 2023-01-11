import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetOfferLink } from "./linksgetofferlink";



export class StandardOfferLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=getOffer" })
  getOffer?: LinksGetOfferLink;
}

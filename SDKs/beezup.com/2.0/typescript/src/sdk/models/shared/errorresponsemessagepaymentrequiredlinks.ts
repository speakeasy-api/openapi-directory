import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetOfferLink } from "./linksgetofferlink";



export class ErrorResponseMessagePaymentRequiredLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer: LinksGetOfferLink;
}

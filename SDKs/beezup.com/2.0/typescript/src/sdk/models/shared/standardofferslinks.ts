import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetStandardOffersLink } from "./linksgetstandardofferslink";



export class StandardOffersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetStandardOffersLink;
}

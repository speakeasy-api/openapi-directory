import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferContent } from "./offercontent";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { OfferLinks } from "./offerlinks";



export class Offer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: OfferContent;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: OfferLinks;
}

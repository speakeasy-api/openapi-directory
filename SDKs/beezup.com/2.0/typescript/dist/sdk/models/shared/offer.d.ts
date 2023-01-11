import { SpeakeasyBase } from "../../../internal/utils";
import { OfferContent } from "./offercontent";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { OfferLinks } from "./offerlinks";
export declare class Offer extends SpeakeasyBase {
    content?: OfferContent;
    info?: BeezUpCommonInfoSummaries;
    links?: OfferLinks;
}

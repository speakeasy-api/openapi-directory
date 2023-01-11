import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Functionality } from "./functionality";
import { StandardOffersLinks } from "./standardofferslinks";
import { StandardOffer } from "./standardoffer";



export class StandardOffers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionalities", elemType: Functionality })
  functionalities: Functionality[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StandardOffersLinks;

  @SpeakeasyMetadata({ data: "json, name=offers", elemType: StandardOffer })
  offers: StandardOffer[];
}

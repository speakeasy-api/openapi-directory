import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferFunctionality } from "./offerfunctionality";
import { StandardOfferLinks } from "./standardofferlinks";



export class StandardOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalClickPrice" })
  additionalClickPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedPrice" })
  fixedPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=functionalities", elemType: OfferFunctionality })
  functionalities?: OfferFunctionality[];

  @SpeakeasyMetadata({ data: "json, name=includedClick" })
  includedClick?: number;

  @SpeakeasyMetadata({ data: "json, name=isMostPopular" })
  isMostPopular?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOldOffer" })
  isOldOffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StandardOfferLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}

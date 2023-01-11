import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answeredQuestions" })
  answeredQuestions?: number;

  @SpeakeasyMetadata({ data: "json, name=asin" })
  asin?: string;

  @SpeakeasyMetadata({ data: "json, name=countReview" })
  countReview?: number;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=fulfilledBy" })
  fulfilledBy?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceSaving" })
  priceSaving?: string;

  @SpeakeasyMetadata({ data: "json, name=priceShippingInformation" })
  priceShippingInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=prime" })
  prime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productRating" })
  productRating?: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=responseMessage" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=retailPrice" })
  retailPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeSelection" })
  sizeSelection?: string[];

  @SpeakeasyMetadata({ data: "json, name=soldBy" })
  soldBy?: string;

  @SpeakeasyMetadata({ data: "json, name=warehouseAvailability" })
  warehouseAvailability?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BuyRecommendationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyRecommendations" })
  buyRecommendations?: string[];

  @SpeakeasyMetadata({ data: "json, name=numberOfProducts" })
  numberOfProducts?: number;

  @SpeakeasyMetadata({ data: "json, name=responseMessage" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: string;
}

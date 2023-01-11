import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestBuyRecommendationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class RequestBuyRecommendationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestBuyRecommendationQueryParams;
}


export class RequestBuyRecommendationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  buyRecommendationResponse?: shared.BuyRecommendationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

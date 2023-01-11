import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderListFullV3Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string;
}


export class GetOrderListFullV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetOrderListFullV3Headers;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderListRequest;
}


export class GetOrderListFullV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;

  @SpeakeasyMetadata()
  orderListFullWithLinks?: shared.OrderListFullWithLinks;
}

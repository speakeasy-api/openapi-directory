import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderListFullHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string[];
}


export class GetOrderListFullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetOrderListFullHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderListRequest;
}


export class GetOrderListFullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orderListFull?: shared.OrderListFull;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class GetOrderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderPathParams;

  @SpeakeasyMetadata()
  headers: GetOrderHeaders;
}


export class GetOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  order?: shared.Order;
}

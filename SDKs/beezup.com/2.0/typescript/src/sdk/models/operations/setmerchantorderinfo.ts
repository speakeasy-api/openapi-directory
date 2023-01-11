import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetMerchantOrderInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class SetMerchantOrderInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetMerchantOrderInfoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetMerchantOrderInfoRequest;
}


export class SetMerchantOrderInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

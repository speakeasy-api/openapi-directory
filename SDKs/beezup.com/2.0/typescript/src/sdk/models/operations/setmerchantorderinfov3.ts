import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetMerchantOrderInfoV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class SetMerchantOrderInfoV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testMode" })
  testMode?: boolean;
}


export class SetMerchantOrderInfoV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetMerchantOrderInfoV3PathParams;

  @SpeakeasyMetadata()
  queryParams: SetMerchantOrderInfoV3QueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetMerchantOrderInfoRequest;
}


export class SetMerchantOrderInfoV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}

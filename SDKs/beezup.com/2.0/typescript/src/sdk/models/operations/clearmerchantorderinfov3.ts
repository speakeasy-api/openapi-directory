import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClearMerchantOrderInfoV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class ClearMerchantOrderInfoV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testMode" })
  testMode?: boolean;
}


export class ClearMerchantOrderInfoV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClearMerchantOrderInfoV3PathParams;

  @SpeakeasyMetadata()
  queryParams: ClearMerchantOrderInfoV3QueryParams;
}


export class ClearMerchantOrderInfoV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}

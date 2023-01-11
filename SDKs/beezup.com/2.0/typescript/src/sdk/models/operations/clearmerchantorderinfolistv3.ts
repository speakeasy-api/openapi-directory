import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClearMerchantOrderInfoListV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testMode" })
  testMode?: boolean;
}


export class ClearMerchantOrderInfoListV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClearMerchantOrderInfoListV3QueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClearMerchantOrderInfoListRequest;
}


export class ClearMerchantOrderInfoListV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  batchOrderOperationResponse?: shared.BatchOrderOperationResponse;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeOrderListV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeOrderType" })
  changeOrderType: string;
}


export class ChangeOrderListV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testMode" })
  testMode?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class ChangeOrderListV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeOrderListV2PathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeOrderListV2QueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeOrderListRequestV2;
}


export class ChangeOrderListV2Response extends SpeakeasyBase {
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

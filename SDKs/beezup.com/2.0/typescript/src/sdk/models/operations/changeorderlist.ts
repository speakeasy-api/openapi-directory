import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeOrderListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeOrderType" })
  changeOrderType: string;
}


export class ChangeOrderListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testMode" })
  testMode?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName: string;
}


export class ChangeOrderListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeOrderListPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeOrderListQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeOrderListRequest;
}


export class ChangeOrderListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}

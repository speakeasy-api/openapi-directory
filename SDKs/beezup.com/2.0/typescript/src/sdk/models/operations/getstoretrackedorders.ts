import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreTrackedOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreTrackedOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;
}


export class GetStoreTrackedOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreTrackedOrdersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStoreTrackedOrdersQueryParams;
}


export class GetStoreTrackedOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackedOrders?: shared.TrackedOrders;
}

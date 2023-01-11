import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreTrackedExternalOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreTrackedExternalOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;
}


export class GetStoreTrackedExternalOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreTrackedExternalOrdersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStoreTrackedExternalOrdersQueryParams;
}


export class GetStoreTrackedExternalOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackedExternalOrders?: shared.TrackedExternalOrders;
}

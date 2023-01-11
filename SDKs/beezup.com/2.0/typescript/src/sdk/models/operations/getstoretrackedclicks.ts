import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreTrackedClicksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreTrackedClicksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;
}


export class GetStoreTrackedClicksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreTrackedClicksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStoreTrackedClicksQueryParams;
}


export class GetStoreTrackedClicksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackedClicks?: shared.TrackedClicks;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AnalyticsStoreIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class AnalyticsStoreIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnalyticsStoreIndexPathParams;
}


export class AnalyticsStoreIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  analyticsStoreIndex?: shared.AnalyticsStoreIndex;
}

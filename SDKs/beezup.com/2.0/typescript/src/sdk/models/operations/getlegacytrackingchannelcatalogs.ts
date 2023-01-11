import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLegacyTrackingChannelCatalogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId?: string;
}


export class GetLegacyTrackingChannelCatalogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLegacyTrackingChannelCatalogsQueryParams;
}


export class GetLegacyTrackingChannelCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyTrackingChannelCatalogList?: shared.LegacyTrackingChannelCatalogList;
}

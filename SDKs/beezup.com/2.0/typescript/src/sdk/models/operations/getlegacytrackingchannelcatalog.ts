import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLegacyTrackingChannelCatalogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class GetLegacyTrackingChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLegacyTrackingChannelCatalogPathParams;
}


export class GetLegacyTrackingChannelCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyTrackingChannelCatalog?: shared.LegacyTrackingChannelCatalog;
}

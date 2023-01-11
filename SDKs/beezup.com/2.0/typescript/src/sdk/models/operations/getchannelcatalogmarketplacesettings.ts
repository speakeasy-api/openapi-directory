import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogMarketplaceSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class GetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCatalogMarketplaceSettingsPathParams;
}


export class GetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelCatalogMarketplaceSettings?: shared.ChannelCatalogMarketplaceSettings;
}

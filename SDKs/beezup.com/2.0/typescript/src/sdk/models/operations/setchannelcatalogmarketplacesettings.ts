import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetChannelCatalogMarketplaceSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class SetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetChannelCatalogMarketplaceSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetChannelCatalogMarketplaceSettingsRequest;
}


export class SetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureChannelCatalogCostSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ConfigureChannelCatalogCostSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureChannelCatalogCostSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CostSettings;
}


export class ConfigureChannelCatalogCostSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

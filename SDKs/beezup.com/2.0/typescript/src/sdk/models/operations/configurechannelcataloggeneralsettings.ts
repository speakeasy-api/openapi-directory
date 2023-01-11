import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureChannelCatalogGeneralSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ConfigureChannelCatalogGeneralSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureChannelCatalogGeneralSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GeneralSettings;
}


export class ConfigureChannelCatalogGeneralSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

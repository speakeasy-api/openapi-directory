import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureChannelCatalogExclusionFiltersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ConfigureChannelCatalogExclusionFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureChannelCatalogExclusionFiltersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.ExclusionFilter })
  request: shared.ExclusionFilter[];
}


export class ConfigureChannelCatalogExclusionFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

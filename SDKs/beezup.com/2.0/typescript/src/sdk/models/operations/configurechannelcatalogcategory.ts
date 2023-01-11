import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureChannelCatalogCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ConfigureChannelCatalogCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureChannelCatalogCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfigureCategoryRequest;
}


export class ConfigureChannelCatalogCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

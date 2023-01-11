import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReenableChannelCatalogCategoryMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ReenableChannelCatalogCategoryMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReenableChannelCatalogCategoryMappingPathParams;
}


export class ReenableChannelCatalogCategoryMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

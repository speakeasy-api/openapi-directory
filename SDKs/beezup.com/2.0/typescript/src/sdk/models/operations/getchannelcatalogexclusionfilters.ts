import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogExclusionFiltersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class GetChannelCatalogExclusionFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCatalogExclusionFiltersPathParams;
}


export class GetChannelCatalogExclusionFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exclusionFiltersResponse?: shared.ExclusionFiltersResponse;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogProductInfoListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCatalogProductInfoListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetChannelCatalogProductInfoListRequest;
}


export class GetChannelCatalogProductInfoListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelCatalogProductInfoList?: shared.ChannelCatalogProductInfoList;
}

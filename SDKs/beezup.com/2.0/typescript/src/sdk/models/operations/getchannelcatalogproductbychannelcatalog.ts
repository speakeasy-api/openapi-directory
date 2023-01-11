import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogProductByChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChannelCatalogProductByChannelCatalogRequest;
}


export class GetChannelCatalogProductByChannelCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelCatalogProductByChannelCatalogResponse?: shared.ChannelCatalogProductByChannelCatalogResponse;
}

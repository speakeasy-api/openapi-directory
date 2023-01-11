import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelColumnsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelColumnsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string[];
}


export class GetChannelColumnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelColumnsPathParams;

  @SpeakeasyMetadata()
  headers: GetChannelColumnsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string[];
}


export class GetChannelColumnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ChannelColumn })
  channelColumns?: shared.ChannelColumn[];
}

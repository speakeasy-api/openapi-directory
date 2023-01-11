import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMetadataOfChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: string;
}


export class GetMetadataOfChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class GetMetadataOfChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetMetadataOfChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMetadataOfChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMetadataOfChannelQueryParams;

  @SpeakeasyMetadata()
  headers: GetMetadataOfChannelHeaders;
}


export class GetMetadataOfChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  channelDetails?: shared.ChannelDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

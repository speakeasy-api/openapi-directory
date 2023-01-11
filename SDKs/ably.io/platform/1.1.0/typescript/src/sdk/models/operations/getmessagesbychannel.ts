import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessagesByChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: string;
}


export class GetMessagesByChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.FilterDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetMessagesByChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetMessagesByChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessagesByChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMessagesByChannelQueryParams;

  @SpeakeasyMetadata()
  headers: GetMessagesByChannelHeaders;
}


export class GetMessagesByChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMessagesByChannel2XXTextHTMLString?: string;
}

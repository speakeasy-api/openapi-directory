import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPresenceHistoryOfChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: string;
}


export class GetPresenceHistoryOfChannelQueryParams extends SpeakeasyBase {
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


export class GetPresenceHistoryOfChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetPresenceHistoryOfChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPresenceHistoryOfChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPresenceHistoryOfChannelQueryParams;

  @SpeakeasyMetadata()
  headers: GetPresenceHistoryOfChannelHeaders;
}


export class GetPresenceHistoryOfChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.PresenceMessage })
  presenceMessages?: shared.PresenceMessage[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPresenceHistoryOfChannel2XXTextHTMLString?: string;
}

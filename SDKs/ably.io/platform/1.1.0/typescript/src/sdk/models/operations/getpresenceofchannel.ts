import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPresenceOfChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: string;
}


export class GetPresenceOfChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetPresenceOfChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetPresenceOfChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPresenceOfChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPresenceOfChannelQueryParams;

  @SpeakeasyMetadata()
  headers: GetPresenceOfChannelHeaders;
}


export class GetPresenceOfChannelResponse extends SpeakeasyBase {
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
  getPresenceOfChannel200TextHTMLString?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelsWithPushSubscribersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class GetChannelsWithPushSubscribersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetChannelsWithPushSubscribersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChannelsWithPushSubscribersQueryParams;

  @SpeakeasyMetadata()
  headers: GetChannelsWithPushSubscribersHeaders;
}


export class GetChannelsWithPushSubscribersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChannelsWithPushSubscribers2XXApplicationJSONStrings?: string[];
}

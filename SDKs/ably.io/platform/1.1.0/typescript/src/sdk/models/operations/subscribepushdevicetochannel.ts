import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribePushDeviceToChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class SubscribePushDeviceToChannelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class SubscribePushDeviceToChannelApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;
}


export class SubscribePushDeviceToChannelApplicationJson2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;
}


export class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=channel;" })
  channel?: string;

  @SpeakeasyMetadata({ data: "form, name=deviceId;" })
  deviceId?: string;
}


export class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=channel;" })
  channel?: string;

  @SpeakeasyMetadata({ data: "form, name=clientId;" })
  clientId?: string;
}


export class SubscribePushDeviceToChannelRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-msgpack" })
  applicationXMsgpack: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  oneOf1?: any;
}


export class SubscribePushDeviceToChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SubscribePushDeviceToChannelQueryParams;

  @SpeakeasyMetadata()
  headers: SubscribePushDeviceToChannelHeaders;

  @SpeakeasyMetadata()
  request?: SubscribePushDeviceToChannelRequests;
}


export class SubscribePushDeviceToChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

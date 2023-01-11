import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterPushDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class RegisterPushDeviceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class RegisterPushDeviceRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-msgpack" })
  applicationXMsgpack: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceDetails?: shared.DeviceDetailsInput;
}


export class RegisterPushDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RegisterPushDeviceQueryParams;

  @SpeakeasyMetadata()
  headers: RegisterPushDeviceHeaders;

  @SpeakeasyMetadata()
  request?: RegisterPushDeviceRequestsInput;
}


export class RegisterPushDeviceResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceDetails?: shared.DeviceDetailsOutput;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

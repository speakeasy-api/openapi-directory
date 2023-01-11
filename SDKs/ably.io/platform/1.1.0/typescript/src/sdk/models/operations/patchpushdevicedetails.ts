import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPushDeviceDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device_id" })
  deviceId: string;
}


export class PatchPushDeviceDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class PatchPushDeviceDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class PatchPushDeviceDetailsRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-msgpack" })
  applicationXMsgpack: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceDetails?: shared.DeviceDetailsInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  deviceDetails1?: shared.DeviceDetailsInput;
}


export class PatchPushDeviceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPushDeviceDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchPushDeviceDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: PatchPushDeviceDetailsHeaders;

  @SpeakeasyMetadata()
  request?: PatchPushDeviceDetailsRequestsInput;
}


export class PatchPushDeviceDetailsResponseOutput extends SpeakeasyBase {
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

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnregisterPushDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device_id" })
  deviceId: string;
}


export class UnregisterPushDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class UnregisterPushDeviceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class UnregisterPushDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnregisterPushDevicePathParams;

  @SpeakeasyMetadata()
  queryParams: UnregisterPushDeviceQueryParams;

  @SpeakeasyMetadata()
  headers: UnregisterPushDeviceHeaders;
}


export class UnregisterPushDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

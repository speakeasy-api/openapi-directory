import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePushDeviceDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=device_id" })
  deviceId: string;
}


export class UpdatePushDeviceDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class UpdatePushDeviceDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class UpdatePushDeviceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePushDeviceDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdatePushDeviceDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: UpdatePushDeviceDetailsHeaders;
}


export class UpdatePushDeviceDetailsResponseOutput extends SpeakeasyBase {
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

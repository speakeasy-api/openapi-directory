import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ControlChargerChargingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chargerId" })
  chargerId: string;
}

export enum ControlChargerChargingRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}


export class ControlChargerChargingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ControlChargerChargingRequestBodyActionEnum;
}


export class ControlChargerChargingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class ControlChargerChargingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ControlChargerChargingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ControlChargerChargingRequestBody;

  @SpeakeasyMetadata()
  security: ControlChargerChargingSecurity;
}


export class ControlChargerChargingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

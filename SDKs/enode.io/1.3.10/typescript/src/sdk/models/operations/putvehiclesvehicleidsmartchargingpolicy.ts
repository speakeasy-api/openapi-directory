import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVehiclesVehicleidSmartchargingpolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class PutVehiclesVehicleidSmartchargingpolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deadline" })
  deadline?: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;
}


export class PutVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class PutVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVehiclesVehicleidSmartchargingpolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutVehiclesVehicleidSmartchargingpolicyRequestBody;

  @SpeakeasyMetadata()
  security: PutVehiclesVehicleidSmartchargingpolicySecurity;
}


export class PutVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}

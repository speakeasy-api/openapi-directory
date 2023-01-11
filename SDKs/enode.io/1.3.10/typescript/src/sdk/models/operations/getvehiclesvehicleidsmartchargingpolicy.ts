import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesVehicleidSmartchargingpolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class GetVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class GetVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclesVehicleidSmartchargingpolicyPathParams;

  @SpeakeasyMetadata()
  security: GetVehiclesVehicleidSmartchargingpolicySecurity;
}


export class GetVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}

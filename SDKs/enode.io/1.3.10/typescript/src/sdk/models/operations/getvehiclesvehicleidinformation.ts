import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesVehicleidInformationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class GetVehiclesVehicleidInformationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


// GetVehiclesVehicleidInformation200ApplicationJson
/** 
 * Descriptive information about the Vehicle
**/
export class GetVehiclesVehicleidInformation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetVehiclesVehicleidInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclesVehicleidInformationPathParams;

  @SpeakeasyMetadata()
  security: GetVehiclesVehicleidInformationSecurity;
}


export class GetVehiclesVehicleidInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehiclesVehicleidInformation200ApplicationJSONObject?: GetVehiclesVehicleidInformation200ApplicationJson;
}

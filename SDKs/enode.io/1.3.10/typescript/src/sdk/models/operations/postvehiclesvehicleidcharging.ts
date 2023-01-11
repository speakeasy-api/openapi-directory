import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVehiclesVehicleidChargingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicleId" })
  vehicleId: string;
}


export class PostVehiclesVehicleidChargingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class PostVehiclesVehicleidChargingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVehiclesVehicleidChargingPathParams;

  @SpeakeasyMetadata()
  security: PostVehiclesVehicleidChargingSecurity;
}


export class PostVehiclesVehicleidChargingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

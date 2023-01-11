import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVehiclesVehicleidChargingPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class PostVehiclesVehicleidChargingSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class PostVehiclesVehicleidChargingRequest extends SpeakeasyBase {
    pathParams: PostVehiclesVehicleidChargingPathParams;
    security: PostVehiclesVehicleidChargingSecurity;
}
export declare class PostVehiclesVehicleidChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

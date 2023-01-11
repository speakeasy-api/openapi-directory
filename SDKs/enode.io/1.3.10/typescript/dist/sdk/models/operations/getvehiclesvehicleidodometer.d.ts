import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesVehicleidOdometerPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class GetVehiclesVehicleidOdometerSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
/**
 * Vehicle's odometer with timestamp
**/
export declare class GetVehiclesVehicleidOdometer200ApplicationJson extends SpeakeasyBase {
    distance?: number;
    lastUpdated?: Date;
}
export declare class GetVehiclesVehicleidOdometerRequest extends SpeakeasyBase {
    pathParams: GetVehiclesVehicleidOdometerPathParams;
    security: GetVehiclesVehicleidOdometerSecurity;
}
export declare class GetVehiclesVehicleidOdometerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehiclesVehicleidOdometer200ApplicationJSONObject?: GetVehiclesVehicleidOdometer200ApplicationJson;
}

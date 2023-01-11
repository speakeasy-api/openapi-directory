import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesVehicleidLocationPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class GetVehiclesVehicleidLocationSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
/**
 * Vehicle's GPS coordinates with timestamp
**/
export declare class GetVehiclesVehicleidLocation200ApplicationJson extends SpeakeasyBase {
    lastUpdated?: Date;
    latitude?: number;
    longitude?: number;
}
export declare class GetVehiclesVehicleidLocationRequest extends SpeakeasyBase {
    pathParams: GetVehiclesVehicleidLocationPathParams;
    security: GetVehiclesVehicleidLocationSecurity;
}
export declare class GetVehiclesVehicleidLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehiclesVehicleidLocation200ApplicationJSONObject?: GetVehiclesVehicleidLocation200ApplicationJson;
}

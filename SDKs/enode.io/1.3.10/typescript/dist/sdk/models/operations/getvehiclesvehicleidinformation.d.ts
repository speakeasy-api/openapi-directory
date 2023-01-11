import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesVehicleidInformationPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class GetVehiclesVehicleidInformationSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
/**
 * Descriptive information about the Vehicle
**/
export declare class GetVehiclesVehicleidInformation200ApplicationJson extends SpeakeasyBase {
    brand?: string;
    id?: string;
    model?: string;
    year?: number;
}
export declare class GetVehiclesVehicleidInformationRequest extends SpeakeasyBase {
    pathParams: GetVehiclesVehicleidInformationPathParams;
    security: GetVehiclesVehicleidInformationSecurity;
}
export declare class GetVehiclesVehicleidInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehiclesVehicleidInformation200ApplicationJSONObject?: GetVehiclesVehicleidInformation200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVehiclesVehicleidChargingSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class PostVehiclesVehicleidChargingRequest extends SpeakeasyBase {
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
export declare class PostVehiclesVehicleidChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

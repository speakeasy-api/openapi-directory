import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehicleOdometerRequest extends SpeakeasyBase {
    /**
     * The vehicle id that needs to be fetched
     */
    id: string;
}
export declare class GetVehicleOdometerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

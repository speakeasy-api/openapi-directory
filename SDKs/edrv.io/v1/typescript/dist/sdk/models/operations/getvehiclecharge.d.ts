import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehicleChargeRequest extends SpeakeasyBase {
    /**
     * The vehicle id that needs to be fetched
     */
    id: string;
}
export declare class GetVehicleChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

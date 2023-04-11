import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class DeleteCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
    /**
     * ID of the Charging Location
     */
    chargingLocationId: string;
}
export declare class DeleteCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

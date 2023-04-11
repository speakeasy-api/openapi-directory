import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StromkontoLoginRequestBody extends SpeakeasyBase {
    email?: string;
}
/**
 * Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.
 */
export declare enum StromkontoLogin200ApplicationJSONStatusEnum {
    Registered = "registered",
    Unregistered = "unregistered"
}
/**
 * Success
 */
export declare class StromkontoLogin200ApplicationJSON extends SpeakeasyBase {
    /**
     * Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.
     */
    status?: StromkontoLogin200ApplicationJSONStatusEnum;
}
export declare class StromkontoLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stromkontoLogin200ApplicationJSONObject?: StromkontoLogin200ApplicationJSON;
}

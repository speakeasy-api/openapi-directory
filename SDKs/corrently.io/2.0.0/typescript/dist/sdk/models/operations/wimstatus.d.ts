import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WimstatusRequest extends SpeakeasyBase {
    /**
     * VID key of the process.
     */
    vid?: string;
}
/**
 * Success
 */
export declare class Wimstatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * Starting time of process
     */
    wimStarted?: number;
    /**
     * Latest Status
     */
    wimStatus?: string;
}
export declare class WimstatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    wimstatus200ApplicationJSONObject?: Wimstatus200ApplicationJSON;
}

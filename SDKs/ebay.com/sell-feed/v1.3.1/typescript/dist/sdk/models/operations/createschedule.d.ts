import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateScheduleSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateScheduleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createSchedule201ApplicationJSONObject?: Record<string, any>;
}

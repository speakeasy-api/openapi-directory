import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetchargingscheduleRequestBodySchedule extends SpeakeasyBase {
    endDate?: string;
    limit?: number;
    startDate?: string;
    unit?: string;
}
export declare class SetchargingscheduleRequestBody extends SpeakeasyBase {
    connector?: string;
    schedule?: SetchargingscheduleRequestBodySchedule[];
}
/**
 * A successful response
 */
export declare class Setchargingschedule201ApplicationJSON extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class SetchargingscheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    setchargingschedule201ApplicationJSONObject?: Setchargingschedule201ApplicationJSON;
}

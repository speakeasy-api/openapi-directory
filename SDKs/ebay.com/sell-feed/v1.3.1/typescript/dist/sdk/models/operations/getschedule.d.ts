import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduleSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetScheduleRequest extends SpeakeasyBase {
    /**
     * The ID of the schedule for which to retrieve the details. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
     */
    scheduleId: string;
}
export declare class GetScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userScheduleResponse?: shared.UserScheduleResponse;
}

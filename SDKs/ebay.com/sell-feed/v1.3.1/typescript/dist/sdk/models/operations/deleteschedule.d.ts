import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteScheduleSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteScheduleRequest extends SpeakeasyBase {
    /**
     * The <strong>schedule_id</strong> of the schedule to delete. This ID was generated when the task was created. If you do not know the schedule_id, use the <strong>getSchedules</strong> method to return all schedules based on a specified feed_type and find the schedule_id of the schedule to delete.
     */
    scheduleId: string;
}
export declare class DeleteScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

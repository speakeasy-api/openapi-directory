import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateScheduleSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateScheduleRequest extends SpeakeasyBase {
    /**
     * In the request payload: <strong>scheduleName</strong> is optional; <strong>preferredTriggerHour</strong>, <strong>preferredTriggerDayOfWeek</strong>, <strong>preferredTriggerDayOfMonth</strong>, <strong>scheduleStartDate</strong>, <strong>scheduleEndDate</strong>, and <strong>schemaVersion</strong> are conditional.
     */
    updateUserScheduleRequest: shared.UpdateUserScheduleRequest;
    /**
     * The ID of the schedule to update. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
     */
    scheduleId: string;
}
export declare class UpdateScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

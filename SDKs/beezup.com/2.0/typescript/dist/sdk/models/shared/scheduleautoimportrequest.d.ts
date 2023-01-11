import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message request to schedule the auto import
**/
export declare class ScheduleAutoImportRequest extends SpeakeasyBase {
    localTimeZoneName?: string;
    schedules: string[];
}

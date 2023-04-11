import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message request to schedule the auto import
 */
export declare class ScheduleAutoImportRequest extends SpeakeasyBase {
    /**
     * If null the local time zone name will be "Romance Standard Time"
     */
    localTimeZoneName?: string;
    /**
     * Indicate the time span you want to import your catalog. (i.e. "21:00:00" to import your catalog at 9PM)
     */
    schedules: string[];
}

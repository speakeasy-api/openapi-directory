import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items.
 */
export declare class UserScheduleResponse extends SpeakeasyBase {
    /**
     * The creation date of the schedule in hours based on the 24-hour Coordinated Universal Time (UTC) clock.
     */
    creationDate?: string;
    /**
     * The <strong>feedType</strong> associated with the schedule.
     */
    feedType?: string;
    /**
     * The date the schedule was last modified.
     */
    lastModifiedDate?: string;
    /**
     * The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the number of days in the month.
     */
    preferredTriggerDayOfMonth?: number;
    /**
     * The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a>
     */
    preferredTriggerDayOfWeek?: string;
    /**
     * The preferred two-digit hour of the day to trigger the schedule. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<br /><br /><code>11Z</code><br /><br />
     */
    preferredTriggerHour?: string;
    /**
     * The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes <code>INACTIVE</code>.
     */
    scheduleEndDate?: string;
    /**
     * The ID of the schedule. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
     */
    scheduleId?: string;
    /**
     * The schedule name assigned by the user for the created schedule. Users assign this name for their reference.
     */
    scheduleName?: string;
    /**
     * The timestamp that indicates the start of the report generation.
     */
    scheduleStartDate?: string;
    /**
     * The ID of the template used to create this schedule.
     */
    scheduleTemplateId?: string;
    /**
     * The schema version of the feedType for the schedule.
     */
    schemaVersion?: string;
    /**
     * The enumeration value that indicates the state of the schedule. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * The reason the schedule is inactive. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusReasonEnum'>eBay API documentation</a>
     */
    statusReason?: string;
}

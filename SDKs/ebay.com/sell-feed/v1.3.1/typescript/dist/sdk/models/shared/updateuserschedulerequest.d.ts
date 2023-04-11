import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for a schedule update to a schedule generated with the Feed API.
 */
export declare class UpdateUserScheduleRequest extends SpeakeasyBase {
    /**
     * The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Minimum: </b>1<b><br /><br /><b>Maximum: </b>31
     */
    preferredTriggerDayOfMonth?: number;
    /**
     * The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a>
     */
    preferredTriggerDayOfWeek?: string;
    /**
     * The preferred two-digit hour of the day to trigger the schedule. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<code> 11Z</code><br /><br /><b>Minimum: </b><code>00Z</code><b><br /><br /><b>Maximum: </b><code>23Z</code>
     */
    preferredTriggerHour?: string;
    /**
     * The timestamp on which the schedule (report generation) ends. After this date, the schedule status becomes <code>INACTIVE</code>. <br /><br />Use this field, if available, to end the schedule in the future. This value must be later than <strong>scheduleStartDate</strong> (if supplied). This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents UTC October 10, 2021 at 10:00 AM:<br /><code> 2021-10-10T10Z</code>
     */
    scheduleEndDate?: string;
    /**
     * The schedule name assigned by the user for the created schedule.
     */
    scheduleName?: string;
    /**
     * The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the <strong>scheduleEndDate</strong> occurs or the <strong>scheduleTemplateId</strong> becomes inactive. <br /><br />Use this field, if available, to start the schedule in the future but before the <strong>scheduleEndDate</strong> (if supplied). This field is available as specified by the template <strong>(scheduleTemplateId)</strong>.  The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:<br /><code> 2020-01-01T12Z</code>
     */
    scheduleStartDate?: string;
    /**
     * The schema version of the feedType for the schedule. This field is required if the <strong>feedType</strong> has a schema version. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.
     */
    schemaVersion?: string;
}

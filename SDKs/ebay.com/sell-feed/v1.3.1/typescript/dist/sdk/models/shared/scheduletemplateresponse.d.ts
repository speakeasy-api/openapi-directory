import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedConfiguration } from "./supportedconfiguration";
/**
 * The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items.
 */
export declare class ScheduleTemplateResponse extends SpeakeasyBase {
    /**
     * The feed type of the schedule template. <p> <span class="tablenote"><strong>Note:</strong> When calling <strong>createSchedule</strong> and <strong>updateSchedule</strong> methods you must match the feed type specified by the schedule template (this feedType).</span></p>
     */
    feedType?: string;
    /**
     * This field specifies how often the schedule is generated. If set to <code>HALF_HOUR</code> or <code>ONE_HOUR</code>, you cannot set a <strong>preferredTriggerHour</strong> using <strong>createSchedule</strong> or <strong>updateSchedule</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FrequencyEnum'>eBay API documentation</a>
     */
    frequency?: string;
    /**
     * The template name provided by the template.
     */
    name?: string;
    /**
     * The ID of the template. Use this ID to create a schedule based on the properties of this schedule template.
     */
    scheduleTemplateId?: string;
    /**
     * The present status of the template. You cannot create or modify a schedule using a template with an <code>INACTIVE</code> status.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * An array of the configuration supported by this template.
     */
    supportedConfigurations?: SupportedConfiguration[];
}

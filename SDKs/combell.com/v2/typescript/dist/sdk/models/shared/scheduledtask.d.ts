import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ScheduledTask extends SpeakeasyBase {
    /**
     * Cron expression of scheduled task.<br />
     *
     * @remarks
     * 5-digit expressions (* /5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also * /5, * /10, * /15 and * /30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>
     */
    cronExpression?: string;
    /**
     * Enabled.
     */
    enabled?: boolean;
    /**
     * The id of the scheduled task.<br />
     *
     * @remarks
     * This value is ignored for creation of new scheduled tasks.
     */
    id?: string;
    /**
     * Absolute path from this linux hosting to execute.
     */
    scriptLocation?: string;
}

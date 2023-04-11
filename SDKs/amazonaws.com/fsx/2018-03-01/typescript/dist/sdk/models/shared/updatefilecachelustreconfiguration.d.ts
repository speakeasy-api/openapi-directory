import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration update for an Amazon File Cache resource.
 */
export declare class UpdateFileCacheLustreConfiguration extends SpeakeasyBase {
    /**
     * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
     */
    weeklyMaintenanceStartTime?: string;
}

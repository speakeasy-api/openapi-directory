import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A time range, in percentage, between two points in your media file.</p> <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to search a custom segment. For example, setting <code>StartPercentage</code> to 10 and <code>EndPercentage</code> to 50 only searches for your specified criteria in the audio contained between the 10 percent mark and the 50 percent mark of your media file.</p> <p>You can use also <code>First</code> to search from the start of the media file until the time that you specify. Or use <code>Last</code> to search from the time that you specify until the end of the media file. For example, setting <code>First</code> to 10 only searches for your specified criteria in the audio contained in the first 10 percent of the media file.</p> <p>If you prefer to use milliseconds instead of percentage, see .</p>
 */
export declare class RelativeTimeRange extends SpeakeasyBase {
    endPercentage?: number;
    first?: number;
    last?: number;
    startPercentage?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A time range, in milliseconds, between two points in your media file.</p> <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code> to 50000 only searches for your specified criteria in the audio contained between the 10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include one, you must include both.</p> <p>You can use also <code>First</code> to search from the start of the audio until the time that you specify, or <code>Last</code> to search from the time that you specify until the end of the audio. For example, setting <code>First</code> to 50000 only searches for your specified criteria in the audio contained between the start of the media file to the 50,000 millisecond mark. You can use <code>First</code> and <code>Last</code> independently of each other.</p> <p>If you prefer to use percentage instead of milliseconds, see .</p>
 */
export declare class AbsoluteTimeRange extends SpeakeasyBase {
    endTime?: number;
    first?: number;
    last?: number;
    startTime?: number;
}

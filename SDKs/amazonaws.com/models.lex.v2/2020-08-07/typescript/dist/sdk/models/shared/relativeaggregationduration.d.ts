import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDimensionEnum } from "./timedimensionenum";
/**
 * <p>Specifies the time window that utterance statistics are returned for. The time window is always relative to the last time that the that utterances were aggregated. For example, if the <code>ListAggregatedUtterances</code> operation is called at 1600, the time window is set to 1 hour, and the last refresh time was 1530, only utterances made between 1430 and 1530 are returned.</p> <p>You can choose the time window that statistics should be returned for.</p> <ul> <li> <p> <b>Hours</b> - You can request utterance statistics for 1, 3, 6, 12, or 24 hour time windows. Statistics are refreshed every half hour for 1 hour time windows, and hourly for the other time windows.</p> </li> <li> <p> <b>Days</b> - You can request utterance statistics for 3 days. Statistics are refreshed every 6 hours.</p> </li> <li> <p> <b>Weeks</b> - You can see statistics for one or two weeks. Statistics are refreshed every 12 hours for one week time windows, and once per day for two week time windows.</p> </li> </ul>
 */
export declare class RelativeAggregationDuration extends SpeakeasyBase {
    timeDimension: TimeDimensionEnum;
    timeValue: number;
}

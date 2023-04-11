import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.
 */
export declare class TimePeriod extends SpeakeasyBase {
    end?: Date;
    start?: Date;
}

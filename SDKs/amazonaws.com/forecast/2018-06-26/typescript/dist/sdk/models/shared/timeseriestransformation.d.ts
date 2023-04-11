import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { TimeSeriesCondition } from "./timeseriescondition";
/**
 * A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.
 */
export declare class TimeSeriesTransformation extends SpeakeasyBase {
    action?: Action;
    timeSeriesConditions?: TimeSeriesCondition[];
}

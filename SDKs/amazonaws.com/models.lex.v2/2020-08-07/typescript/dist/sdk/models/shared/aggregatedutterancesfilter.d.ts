import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedUtterancesFilterNameEnum } from "./aggregatedutterancesfilternameenum";
import { AggregatedUtterancesFilterOperatorEnum } from "./aggregatedutterancesfilteroperatorenum";
/**
 * Filters responses returned by the <code>ListAggregatedUtterances</code> operation.
 */
export declare class AggregatedUtterancesFilter extends SpeakeasyBase {
    name: AggregatedUtterancesFilterNameEnum;
    operator: AggregatedUtterancesFilterOperatorEnum;
    values: string[];
}

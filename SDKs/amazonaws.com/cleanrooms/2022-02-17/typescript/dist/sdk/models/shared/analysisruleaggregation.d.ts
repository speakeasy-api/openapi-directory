import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateColumn } from "./aggregatecolumn";
import { AggregationConstraint } from "./aggregationconstraint";
import { JoinRequiredOptionEnum } from "./joinrequiredoptionenum";
import { ScalarFunctionsEnum } from "./scalarfunctionsenum";
/**
 * Enables query structure and specified queries that product aggregate statistics.
 */
export declare class AnalysisRuleAggregation extends SpeakeasyBase {
    aggregateColumns: AggregateColumn[];
    dimensionColumns: string[];
    joinColumns: string[];
    joinRequired?: JoinRequiredOptionEnum;
    outputConstraints: AggregationConstraint[];
    scalarFunctions: ScalarFunctionsEnum[];
}

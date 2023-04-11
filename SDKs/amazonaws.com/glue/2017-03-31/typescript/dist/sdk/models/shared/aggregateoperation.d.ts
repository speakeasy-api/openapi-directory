import { SpeakeasyBase } from "../../../internal/utils";
import { AggFunctionEnum } from "./aggfunctionenum";
/**
 * Specifies the set of parameters needed to perform aggregation in the aggregate transform.
 */
export declare class AggregateOperation extends SpeakeasyBase {
    aggFunc: AggFunctionEnum;
    column: string[];
}

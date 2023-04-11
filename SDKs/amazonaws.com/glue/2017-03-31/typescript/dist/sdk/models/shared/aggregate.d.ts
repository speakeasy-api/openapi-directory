import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateOperation } from "./aggregateoperation";
/**
 * Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.
 */
export declare class Aggregate extends SpeakeasyBase {
    aggs: AggregateOperation[];
    groups: string[][];
    inputs: string[];
    name: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { FindingAggregator } from "./findingaggregator";
/**
 * Success
 */
export declare class ListFindingAggregatorsResponse extends SpeakeasyBase {
    findingAggregators?: FindingAggregator[];
    nextToken?: string;
}

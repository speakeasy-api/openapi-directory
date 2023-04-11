import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResponse } from "./aggregationresponse";
import { AggregationTypeEnum } from "./aggregationtypeenum";
/**
 * Success
 */
export declare class ListFindingAggregationsResponse extends SpeakeasyBase {
    aggregationType: AggregationTypeEnum;
    nextToken?: string;
    responses?: AggregationResponse[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationAuthorization } from "./aggregationauthorization";
/**
 * Success
 */
export declare class DescribeAggregationAuthorizationsResponse extends SpeakeasyBase {
    aggregationAuthorizations?: AggregationAuthorization[];
    nextToken?: string;
}

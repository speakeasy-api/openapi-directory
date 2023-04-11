import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatus } from "./aggregatedsourcestatus";
/**
 * Success
 */
export declare class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
    aggregatedSourceStatusList?: AggregatedSourceStatus[];
    nextToken?: string;
}

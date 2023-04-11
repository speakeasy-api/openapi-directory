import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationAggregator } from "./configurationaggregator";
/**
 * Success
 */
export declare class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
    configurationAggregators?: ConfigurationAggregator[];
    nextToken?: string;
}

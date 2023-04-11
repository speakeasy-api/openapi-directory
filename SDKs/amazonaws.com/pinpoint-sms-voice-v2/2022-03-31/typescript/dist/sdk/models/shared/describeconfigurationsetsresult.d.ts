import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSetInformation } from "./configurationsetinformation";
/**
 * Success
 */
export declare class DescribeConfigurationSetsResult extends SpeakeasyBase {
    configurationSets?: ConfigurationSetInformation[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSetFilter } from "./configurationsetfilter";
export declare class DescribeConfigurationSetsRequest extends SpeakeasyBase {
    configurationSetNames?: string[];
    filters?: ConfigurationSetFilter[];
    maxResults?: number;
    nextToken?: string;
}

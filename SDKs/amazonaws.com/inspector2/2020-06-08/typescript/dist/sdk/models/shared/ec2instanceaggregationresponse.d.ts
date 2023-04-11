import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of a finding aggregation by Amazon EC2 instance.
 */
export declare class Ec2InstanceAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    ami?: string;
    instanceId: string;
    instanceTags?: Record<string, string>;
    networkFindings?: number;
    operatingSystem?: string;
    severityCounts?: SeverityCounts;
}

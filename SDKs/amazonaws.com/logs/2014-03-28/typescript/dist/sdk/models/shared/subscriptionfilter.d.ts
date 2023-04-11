import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionEnum } from "./distributionenum";
/**
 * Represents a subscription filter.
 */
export declare class SubscriptionFilter extends SpeakeasyBase {
    creationTime?: number;
    destinationArn?: string;
    /**
     * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
     */
    distribution?: DistributionEnum;
    filterName?: string;
    /**
     * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
     */
    filterPattern?: string;
    logGroupName?: string;
    roleArn?: string;
}

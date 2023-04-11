import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMetrics } from "./applicationmetrics";
import { EnvironmentHealthEnum } from "./environmenthealthenum";
import { InstanceHealthSummary } from "./instancehealthsummary";
/**
 * Health details for an AWS Elastic Beanstalk environment.
 */
export declare class DescribeEnvironmentHealthResult extends SpeakeasyBase {
    applicationMetrics?: ApplicationMetrics;
    causes?: string[];
    color?: string;
    environmentName?: string;
    healthStatus?: string;
    instancesHealth?: InstanceHealthSummary;
    refreshedAt?: Date;
    status?: EnvironmentHealthEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AlertTarget } from "./alerttarget";
import { Behavior } from "./behavior";
import { MetricToRetain } from "./metrictoretain";
/**
 * Success
 */
export declare class DescribeSecurityProfileResponse extends SpeakeasyBase {
    additionalMetricsToRetain?: string[];
    additionalMetricsToRetainV2?: MetricToRetain[];
    alertTargets?: Record<string, AlertTarget>;
    behaviors?: Behavior[];
    creationDate?: Date;
    lastModifiedDate?: Date;
    securityProfileArn?: string;
    securityProfileDescription?: string;
    securityProfileName?: string;
    version?: number;
}

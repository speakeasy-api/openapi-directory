import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorReason } from "./errorreason";
import { MetricInfo } from "./metricinfo";
import { QuotaPeriod } from "./quotaperiod";
/**
 * Information about a quota.
 */
export declare class ServiceQuota extends SpeakeasyBase {
    adjustable?: boolean;
    errorReason?: ErrorReason;
    globalQuota?: boolean;
    period?: QuotaPeriod;
    quotaArn?: string;
    quotaCode?: string;
    quotaName?: string;
    serviceCode?: string;
    serviceName?: string;
    unit?: string;
    usageMetric?: MetricInfo;
    value?: number;
}

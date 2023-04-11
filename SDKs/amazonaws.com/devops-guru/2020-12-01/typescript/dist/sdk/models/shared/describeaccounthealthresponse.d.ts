import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class DescribeAccountHealthResponse extends SpeakeasyBase {
    analyzedResourceCount?: number;
    metricsAnalyzed: number;
    openProactiveInsights: number;
    openReactiveInsights: number;
    resourceHours: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceInsightsMetricQuery } from "./performanceinsightsmetricquery";
import { PerformanceInsightsReferenceData } from "./performanceinsightsreferencedata";
import { PerformanceInsightsStat } from "./performanceinsightsstat";
/**
 * <p>Details about Performance Insights metrics.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul>
 */
export declare class PerformanceInsightsMetricsDetail extends SpeakeasyBase {
    metricDisplayName?: string;
    metricQuery?: PerformanceInsightsMetricQuery;
    referenceData?: PerformanceInsightsReferenceData[];
    statsAtAnomaly?: PerformanceInsightsStat[];
    statsAtBaseline?: PerformanceInsightsStat[];
    unit?: string;
}

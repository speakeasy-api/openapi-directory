import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeStatistics } from "./edgestatistics";
import { ForecastStatistics } from "./forecaststatistics";
import { HistogramEntry } from "./histogramentry";
import { ServiceStatistics } from "./servicestatistics";
/**
 * A list of TimeSeriesStatistic structures.
 */
export declare class TimeSeriesServiceStatistics extends SpeakeasyBase {
    /**
     * Response statistics for an edge.
     */
    edgeSummaryStatistics?: EdgeStatistics;
    responseTimeHistogram?: HistogramEntry[];
    serviceForecastStatistics?: ForecastStatistics;
    /**
     * Response statistics for a service.
     */
    serviceSummaryStatistics?: ServiceStatistics;
    timestamp?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { TimePointGranularityEnum } from "./timepointgranularityenum";
import { TimeSeriesGranularityEnum } from "./timeseriesgranularityenum";
/**
 * <p>The ExplainabilityConfig data type defines the number of time series and time points included in <a>CreateExplainability</a>.</p> <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.</p> <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either “ALL” or “Specific”.</p>
 */
export declare class ExplainabilityConfig extends SpeakeasyBase {
    timePointGranularity: TimePointGranularityEnum;
    timeSeriesGranularity: TimeSeriesGranularityEnum;
}

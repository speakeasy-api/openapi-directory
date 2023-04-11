import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesReplacementsDataSource } from "./timeseriesreplacementsdatasource";
import { TimeSeriesTransformation } from "./timeseriestransformation";
/**
 * Success
 */
export declare class DescribeWhatIfForecastResponse extends SpeakeasyBase {
    creationTime?: Date;
    estimatedTimeRemainingInMinutes?: number;
    forecastTypes?: string[];
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    timeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
    timeSeriesTransformations?: TimeSeriesTransformation[];
    whatIfAnalysisArn?: string;
    whatIfForecastArn?: string;
    whatIfForecastName?: string;
}

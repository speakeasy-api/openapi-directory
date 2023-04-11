import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesSelector } from "./timeseriesselector";
/**
 * Success
 */
export declare class DescribeForecastResponse extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    estimatedTimeRemainingInMinutes?: number;
    forecastArn?: string;
    forecastName?: string;
    forecastTypes?: string[];
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    status?: string;
    timeSeriesSelector?: TimeSeriesSelector;
}

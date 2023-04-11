import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesSelector } from "./timeseriesselector";
/**
 * Success
 */
export declare class DescribeWhatIfAnalysisResponse extends SpeakeasyBase {
    creationTime?: Date;
    estimatedTimeRemainingInMinutes?: number;
    forecastArn?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    /**
     * <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>
     */
    timeSeriesSelector?: TimeSeriesSelector;
    whatIfAnalysisArn?: string;
    whatIfAnalysisName?: string;
}

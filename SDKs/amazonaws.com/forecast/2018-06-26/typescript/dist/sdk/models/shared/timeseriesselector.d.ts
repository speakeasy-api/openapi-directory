import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesIdentifiers } from "./timeseriesidentifiers";
/**
 * <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>
 */
export declare class TimeSeriesSelector extends SpeakeasyBase {
    timeSeriesIdentifiers?: TimeSeriesIdentifiers;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Forecast } from "./forecast";
/**
 * Success
 */
export declare class QueryWhatIfForecastResponse extends SpeakeasyBase {
    /**
     * Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
     */
    forecast?: Forecast;
}

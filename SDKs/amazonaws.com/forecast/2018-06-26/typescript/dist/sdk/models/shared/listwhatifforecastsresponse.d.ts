import { SpeakeasyBase } from "../../../internal/utils";
import { WhatIfForecastSummary } from "./whatifforecastsummary";
/**
 * Success
 */
export declare class ListWhatIfForecastsResponse extends SpeakeasyBase {
    nextToken?: string;
    whatIfForecasts?: WhatIfForecastSummary[];
}

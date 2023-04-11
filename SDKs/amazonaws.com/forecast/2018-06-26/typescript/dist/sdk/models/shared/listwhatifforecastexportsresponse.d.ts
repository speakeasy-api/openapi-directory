import { SpeakeasyBase } from "../../../internal/utils";
import { WhatIfForecastExportSummary } from "./whatifforecastexportsummary";
/**
 * Success
 */
export declare class ListWhatIfForecastExportsResponse extends SpeakeasyBase {
    nextToken?: string;
    whatIfForecastExports?: WhatIfForecastExportSummary[];
}

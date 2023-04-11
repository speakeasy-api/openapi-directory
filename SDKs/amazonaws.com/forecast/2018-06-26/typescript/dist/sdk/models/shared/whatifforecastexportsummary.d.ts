import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary.
 */
export declare class WhatIfForecastExportSummary extends SpeakeasyBase {
    creationTime?: Date;
    destination?: DataDestination;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    whatIfForecastArns?: string[];
    whatIfForecastExportArn?: string;
    whatIfForecastExportName?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary.
 */
export declare class WhatIfForecastSummary extends SpeakeasyBase {
    creationTime?: Date;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    whatIfAnalysisArn?: string;
    whatIfForecastArn?: string;
    whatIfForecastName?: string;
}

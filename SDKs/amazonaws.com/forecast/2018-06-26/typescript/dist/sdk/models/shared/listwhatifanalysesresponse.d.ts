import { SpeakeasyBase } from "../../../internal/utils";
import { WhatIfAnalysisSummary } from "./whatifanalysissummary";
/**
 * Success
 */
export declare class ListWhatIfAnalysesResponse extends SpeakeasyBase {
    nextToken?: string;
    whatIfAnalyses?: WhatIfAnalysisSummary[];
}

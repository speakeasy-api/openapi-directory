import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary.
 */
export declare class WhatIfAnalysisSummary extends SpeakeasyBase {
    creationTime?: Date;
    forecastArn?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    whatIfAnalysisArn?: string;
    whatIfAnalysisName?: string;
}

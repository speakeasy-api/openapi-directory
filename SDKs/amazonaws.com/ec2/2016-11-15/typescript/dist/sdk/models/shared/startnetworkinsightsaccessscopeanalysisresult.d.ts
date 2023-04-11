import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether there are findings.
 */
export declare enum StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisFindingsFoundEnum {
    True = "true",
    False = "false",
    Unknown = "unknown"
}
/**
 * The status.
 */
export declare enum StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisStatusEnum {
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Describes a tag.
 */
export declare class StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The Network Access Scope analysis.
 */
export declare class StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysis extends SpeakeasyBase {
    analyzedEniCount?: number;
    endDate?: Date;
    findingsFound?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisFindingsFoundEnum;
    networkInsightsAccessScopeAnalysisArn?: string;
    networkInsightsAccessScopeAnalysisId?: string;
    networkInsightsAccessScopeId?: string;
    startDate?: Date;
    status?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisStatusEnum;
    statusMessage?: string;
    tags?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysisTags[];
    warningMessage?: string;
}
/**
 * Success
 */
export declare class StartNetworkInsightsAccessScopeAnalysisResult extends SpeakeasyBase {
    networkInsightsAccessScopeAnalysis?: StartNetworkInsightsAccessScopeAnalysisResultNetworkInsightsAccessScopeAnalysis;
}

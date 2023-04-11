import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether there are findings.
 */
export declare enum DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesFindingsFoundEnum {
    True = "true",
    False = "false",
    Unknown = "unknown"
}
/**
 * The status.
 */
export declare enum DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesStatusEnum {
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Describes a tag.
 */
export declare class DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Network Access Scope analysis.
 */
export declare class DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalyses extends SpeakeasyBase {
    analyzedEniCount?: number;
    endDate?: Date;
    findingsFound?: DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesFindingsFoundEnum;
    networkInsightsAccessScopeAnalysisArn?: string;
    networkInsightsAccessScopeAnalysisId?: string;
    networkInsightsAccessScopeId?: string;
    startDate?: Date;
    status?: DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesStatusEnum;
    statusMessage?: string;
    tags?: DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalysesTags[];
    warningMessage?: string;
}
/**
 * Success
 */
export declare class DescribeNetworkInsightsAccessScopeAnalysesResult extends SpeakeasyBase {
    networkInsightsAccessScopeAnalyses?: DescribeNetworkInsightsAccessScopeAnalysesResultNetworkInsightsAccessScopeAnalyses[];
    nextToken?: string;
}

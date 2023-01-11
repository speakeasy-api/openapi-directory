import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the network insights analysis.
**/
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis extends SpeakeasyBase {
    alternatePathHints?: Record<string, any>;
    explanations?: Record<string, any>;
    filterInArns?: Record<string, any>;
    forwardPathComponents?: Record<string, any>;
    networkInsightsAnalysisArn?: Record<string, any>;
    networkInsightsAnalysisId?: Record<string, any>;
    networkInsightsPathId?: Record<string, any>;
    networkPathFound?: Record<string, any>;
    returnPathComponents?: Record<string, any>;
    startDate?: Record<string, any>;
    status?: Record<string, any>;
    statusMessage?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class StartNetworkInsightsAnalysisResult extends SpeakeasyBase {
    networkInsightsAnalysis?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis;
}

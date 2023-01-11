import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis
/** 
 * Information about the network insights analysis.
**/
export class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alternatePathHints?: Record<string, any>;

  @SpeakeasyMetadata()
  explanations?: Record<string, any>;

  @SpeakeasyMetadata()
  filterInArns?: Record<string, any>;

  @SpeakeasyMetadata()
  forwardPathComponents?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInsightsAnalysisArn?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInsightsAnalysisId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInsightsPathId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkPathFound?: Record<string, any>;

  @SpeakeasyMetadata()
  returnPathComponents?: Record<string, any>;

  @SpeakeasyMetadata()
  startDate?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class StartNetworkInsightsAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInsightsAnalysis?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis;
}

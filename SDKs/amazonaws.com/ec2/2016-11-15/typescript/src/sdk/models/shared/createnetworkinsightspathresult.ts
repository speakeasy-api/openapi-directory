import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNetworkInsightsPathResultNetworkInsightsPath
/** 
 * Information about the path.
**/
export class CreateNetworkInsightsPathResultNetworkInsightsPath extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdDate?: Record<string, any>;

  @SpeakeasyMetadata()
  destination?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationIp?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationPort?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInsightsPathArn?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInsightsPathId?: Record<string, any>;

  @SpeakeasyMetadata()
  protocol?: Record<string, any>;

  @SpeakeasyMetadata()
  source?: Record<string, any>;

  @SpeakeasyMetadata()
  sourceIp?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateNetworkInsightsPathResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInsightsPath?: CreateNetworkInsightsPathResultNetworkInsightsPath;
}

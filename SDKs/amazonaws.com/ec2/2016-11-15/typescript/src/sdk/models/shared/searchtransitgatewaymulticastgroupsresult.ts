import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTransitGatewayMulticastGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  multicastGroups?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

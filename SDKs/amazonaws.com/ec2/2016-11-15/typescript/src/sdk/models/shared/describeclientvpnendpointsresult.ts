import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClientVpnEndpointsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpoints?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

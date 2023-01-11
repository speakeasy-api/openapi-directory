import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcEndpointServiceConfigurationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceConfigurations?: Record<string, any>;
}

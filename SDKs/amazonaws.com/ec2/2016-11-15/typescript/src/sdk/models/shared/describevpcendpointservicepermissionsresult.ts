import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcEndpointServicePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedPrincipals?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

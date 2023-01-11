import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLocalGatewayVirtualInterfacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayVirtualInterfaces?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

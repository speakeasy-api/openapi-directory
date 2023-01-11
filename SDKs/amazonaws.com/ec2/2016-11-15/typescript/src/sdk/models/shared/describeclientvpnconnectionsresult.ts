import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClientVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connections?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

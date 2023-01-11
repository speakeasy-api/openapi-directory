import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClientVpnRoutesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  routes?: Record<string, any>;
}

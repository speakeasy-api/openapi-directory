import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFleetInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeInstances?: Record<string, any>;

  @SpeakeasyMetadata()
  fleetId?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}

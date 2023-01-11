import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  stoppingInstances?: Record<string, any>;
}

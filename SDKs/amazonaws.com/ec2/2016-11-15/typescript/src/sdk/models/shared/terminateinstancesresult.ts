import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  terminatingInstances?: Record<string, any>;
}

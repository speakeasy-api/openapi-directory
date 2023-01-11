import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  startingInstances?: Record<string, any>;
}

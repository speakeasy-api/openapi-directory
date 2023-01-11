import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnmonitorInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceMonitorings?: Record<string, any>;
}

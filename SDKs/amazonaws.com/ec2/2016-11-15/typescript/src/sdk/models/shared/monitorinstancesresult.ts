import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MonitorInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceMonitorings?: Record<string, any>;
}

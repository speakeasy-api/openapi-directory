import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyMonitor } from "./anomalymonitor";
import { ResourceTag } from "./resourcetag";
export declare class CreateAnomalyMonitorRequest extends SpeakeasyBase {
    anomalyMonitor: AnomalyMonitor;
    resourceTags?: ResourceTag[];
}

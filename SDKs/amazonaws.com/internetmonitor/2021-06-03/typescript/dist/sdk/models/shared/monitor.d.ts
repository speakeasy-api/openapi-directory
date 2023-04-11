import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorConfigStateEnum } from "./monitorconfigstateenum";
import { MonitorProcessingStatusCodeEnum } from "./monitorprocessingstatuscodeenum";
/**
 * The description of and information about a monitor in Amazon CloudWatch Internet Monitor.
 */
export declare class Monitor extends SpeakeasyBase {
    monitorArn: string;
    monitorName: string;
    processingStatus?: MonitorProcessingStatusCodeEnum;
    status: MonitorConfigStateEnum;
}

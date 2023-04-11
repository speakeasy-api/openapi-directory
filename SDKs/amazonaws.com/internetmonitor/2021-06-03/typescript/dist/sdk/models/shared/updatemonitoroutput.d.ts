import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorConfigStateEnum } from "./monitorconfigstateenum";
/**
 * Success
 */
export declare class UpdateMonitorOutput extends SpeakeasyBase {
    monitorArn: string;
    status: MonitorConfigStateEnum;
}

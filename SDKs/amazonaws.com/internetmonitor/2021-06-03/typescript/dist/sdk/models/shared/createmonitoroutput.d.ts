import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorConfigStateEnum } from "./monitorconfigstateenum";
/**
 * Success
 */
export declare class CreateMonitorOutput extends SpeakeasyBase {
    arn: string;
    status: MonitorConfigStateEnum;
}

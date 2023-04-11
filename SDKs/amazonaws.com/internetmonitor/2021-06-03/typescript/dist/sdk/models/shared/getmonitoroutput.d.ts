import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorConfigStateEnum } from "./monitorconfigstateenum";
import { MonitorProcessingStatusCodeEnum } from "./monitorprocessingstatuscodeenum";
/**
 * Success
 */
export declare class GetMonitorOutput extends SpeakeasyBase {
    createdAt: Date;
    maxCityNetworksToMonitor: number;
    modifiedAt: Date;
    monitorArn: string;
    monitorName: string;
    processingStatus?: MonitorProcessingStatusCodeEnum;
    processingStatusInfo?: string;
    resources: string[];
    status: MonitorConfigStateEnum;
    tags?: Record<string, string>;
}

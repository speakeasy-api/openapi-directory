import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeConfig } from "./edgeconfig";
import { SyncStatusEnum } from "./syncstatusenum";
/**
 * Success
 */
export declare class StartEdgeConfigurationUpdateOutput extends SpeakeasyBase {
    creationTime?: Date;
    edgeConfig?: EdgeConfig;
    failedStatusDetails?: string;
    lastUpdatedTime?: Date;
    streamARN?: string;
    streamName?: string;
    syncStatus?: SyncStatusEnum;
}

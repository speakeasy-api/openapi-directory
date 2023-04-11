import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationHealthStatusEnum } from "./applicationhealthstatusenum";
import { ApplicationProgressStatusEnum } from "./applicationprogressstatusenum";
/**
 * Application aggregated status.
 */
export declare class ApplicationAggregatedStatus extends SpeakeasyBase {
    healthStatus?: ApplicationHealthStatusEnum;
    lastUpdateDateTime?: string;
    progressStatus?: ApplicationProgressStatusEnum;
    totalSourceServers?: number;
}

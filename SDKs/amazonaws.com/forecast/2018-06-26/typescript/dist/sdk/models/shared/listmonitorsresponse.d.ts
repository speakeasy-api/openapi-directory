import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorSummary } from "./monitorsummary";
/**
 * Success
 */
export declare class ListMonitorsResponse extends SpeakeasyBase {
    monitors?: MonitorSummary[];
    nextToken?: string;
}

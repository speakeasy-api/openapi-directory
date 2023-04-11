import { SpeakeasyBase } from "../../../internal/utils";
import { DashboardEntry } from "./dashboardentry";
/**
 * Success
 */
export declare class ListDashboardsOutput extends SpeakeasyBase {
    dashboardEntries?: DashboardEntry[];
    nextToken?: string;
}

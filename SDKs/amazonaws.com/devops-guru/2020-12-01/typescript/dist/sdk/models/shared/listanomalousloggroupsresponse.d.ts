import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalousLogGroup } from "./anomalousloggroup";
/**
 * Success
 */
export declare class ListAnomalousLogGroupsResponse extends SpeakeasyBase {
    anomalousLogGroups: AnomalousLogGroup[];
    insightId: string;
    nextToken?: string;
}

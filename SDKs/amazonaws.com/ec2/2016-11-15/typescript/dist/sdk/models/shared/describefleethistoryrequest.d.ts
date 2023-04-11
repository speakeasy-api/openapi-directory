import { SpeakeasyBase } from "../../../internal/utils";
import { FleetEventTypeEnum } from "./fleeteventtypeenum";
export declare class DescribeFleetHistoryRequest extends SpeakeasyBase {
    dryRun?: boolean;
    eventType?: FleetEventTypeEnum;
    fleetId: string;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DataQuery } from "./dataquery";
export declare class GetAwsNetworkPerformanceDataRequest extends SpeakeasyBase {
    dataQueries?: DataQuery[];
    dryRun?: boolean;
    endTime?: Date;
    maxResults?: number;
    nextToken?: string;
    startTime?: Date;
}

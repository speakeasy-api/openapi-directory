import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilterLogEventsRequest extends SpeakeasyBase {
    endTime?: number;
    filterPattern?: string;
    interleaved?: Record<string, any>;
    limit?: number;
    logGroupName: string;
    logStreamNamePrefix?: string;
    logStreamNames?: string[];
    nextToken?: string;
    startTime?: number;
}

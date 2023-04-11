import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLogEventsRequest extends SpeakeasyBase {
    endTime?: number;
    limit?: number;
    logGroupIdentifier?: string;
    logGroupName?: string;
    logStreamName: string;
    nextToken?: string;
    startFromHead?: boolean;
    startTime?: number;
    unmask?: boolean;
}

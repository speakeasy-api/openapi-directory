import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";
export declare class ListQueriesRequest extends SpeakeasyBase {
    endTime?: Date;
    eventDataStore: string;
    maxResults?: number;
    nextToken?: string;
    queryStatus?: QueryStatusEnum;
    startTime?: Date;
}

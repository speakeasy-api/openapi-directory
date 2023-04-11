import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    eventDataStore?: string;
    maxQueryResults?: number;
    nextToken?: string;
    queryId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListGroupsOlderThanOrderingIdRequest extends SpeakeasyBase {
    dataSourceId?: string;
    indexId: string;
    maxResults?: number;
    nextToken?: string;
    orderingId: number;
}

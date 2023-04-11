import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDiscoveredResourcesRequest extends SpeakeasyBase {
    maxResults?: number;
    memberAccountIds: string[];
    nextToken?: string;
    resourceType: string;
}

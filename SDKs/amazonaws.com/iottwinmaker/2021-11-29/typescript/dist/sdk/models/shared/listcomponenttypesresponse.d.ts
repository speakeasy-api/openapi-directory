import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentTypeSummary } from "./componenttypesummary";
/**
 * Success
 */
export declare class ListComponentTypesResponse extends SpeakeasyBase {
    componentTypeSummaries: ComponentTypeSummary[];
    maxResults?: number;
    nextToken?: string;
    workspaceId: string;
}

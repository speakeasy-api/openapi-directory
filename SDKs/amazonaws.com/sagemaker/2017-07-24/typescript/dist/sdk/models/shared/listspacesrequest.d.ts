import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { SpaceSortKeyEnum } from "./spacesortkeyenum";
export declare class ListSpacesRequest extends SpeakeasyBase {
    domainIdEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SpaceSortKeyEnum;
    sortOrder?: SortOrderEnum;
    spaceNameContains?: string;
}

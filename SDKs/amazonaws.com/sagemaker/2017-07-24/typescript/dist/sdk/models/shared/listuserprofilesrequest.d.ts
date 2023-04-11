import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { UserProfileSortKeyEnum } from "./userprofilesortkeyenum";
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    domainIdEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: UserProfileSortKeyEnum;
    sortOrder?: SortOrderEnum;
    userProfileNameContains?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupMemberApplication } from "./groupsv2groupmemberapplication";
import { QueriesPagedQuery } from "./queriespagedquery";
export declare class SearchResultOfGroupMemberApplication extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupMemberApplication[];
    totalResults?: number;
    /**
     * If useTotalResults is true, then totalResults represents an accurate count.
     *
     * @remarks
     * If False, it does not, and may be estimated/only the size of the current page.
     * Either way, you should probably always only trust hasMore.
     * This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
     */
    useTotalResults?: boolean;
}

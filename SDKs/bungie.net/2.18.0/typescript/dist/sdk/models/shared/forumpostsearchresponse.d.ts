import { SpeakeasyBase } from "../../../internal/utils";
import { ForumForumRecruitmentDetail } from "./forumforumrecruitmentdetail";
import { ForumPollResponse } from "./forumpollresponse";
import { ForumPostResponse } from "./forumpostresponse";
import { GroupsV2GroupResponse } from "./groupsv2groupresponse";
import { QueriesPagedQuery } from "./queriespagedquery";
import { TagsModelsContractsTagResponse } from "./tagsmodelscontractstagresponse";
import { UserGeneralUser } from "./usergeneraluser";
export declare class ForumPostSearchResponse extends SpeakeasyBase {
    authors?: UserGeneralUser[];
    availablePages?: number;
    groups?: GroupsV2GroupResponse[];
    hasMore?: boolean;
    polls?: ForumPollResponse[];
    query?: QueriesPagedQuery;
    recruitmentDetails?: ForumForumRecruitmentDetail[];
    relatedPosts?: ForumPostResponse[];
    replacementContinuationToken?: string;
    results?: ForumPostResponse[];
    searchedTags?: TagsModelsContractsTagResponse[];
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

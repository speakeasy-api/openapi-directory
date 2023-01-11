import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class ReactionsListForTeamDiscussionCommentInOrgQueryParams extends SpeakeasyBase {
    content?: shared.CommentNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentInOrgPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentInOrgQueryParams;
}
export declare class ReactionsListForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}

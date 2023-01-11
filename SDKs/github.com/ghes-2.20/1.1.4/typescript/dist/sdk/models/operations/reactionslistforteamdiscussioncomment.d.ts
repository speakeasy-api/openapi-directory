import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionCommentQueryParams extends SpeakeasyBase {
    content?: shared.CommentNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReactionsListForTeamDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentQueryParams;
    headers: ReactionsListForTeamDiscussionCommentHeaders;
}
export declare class ReactionsListForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}

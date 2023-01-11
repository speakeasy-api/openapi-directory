import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForPullRequestReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReactionsListForPullRequestReviewCommentQueryParams extends SpeakeasyBase {
    content?: shared.CommentIdEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForPullRequestReviewComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForPullRequestReviewCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForPullRequestReviewCommentPathParams;
    queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
}
export declare class ReactionsListForPullRequestReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForPullRequestReviewComment415ApplicationJSONObject?: ReactionsListForPullRequestReviewComment415ApplicationJson;
}

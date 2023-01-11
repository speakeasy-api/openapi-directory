import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForIssueCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReactionsListForIssueCommentQueryParams extends SpeakeasyBase {
    content?: shared.CommentIdEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForIssueComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForIssueCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForIssueCommentPathParams;
    queryParams: ReactionsListForIssueCommentQueryParams;
}
export declare class ReactionsListForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForIssueComment415ApplicationJSONObject?: ReactionsListForIssueComment415ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionCommentRequestBody extends SpeakeasyBase {
    /**
     * The discussion comment's body text.
     */
    body: string;
}
export declare class TeamsUpdateDiscussionCommentRequest extends SpeakeasyBase {
    requestBody: TeamsUpdateDiscussionCommentRequestBody;
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}

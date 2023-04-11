import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateDiscussionCommentRequestBody extends SpeakeasyBase {
    /**
     * The discussion comment's body text.
     */
    body: string;
}
export declare class TeamsCreateDiscussionCommentRequest extends SpeakeasyBase {
    requestBody: TeamsCreateDiscussionCommentRequestBody;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsCreateDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}

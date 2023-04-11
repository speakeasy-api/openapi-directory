import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    /**
     * The discussion comment's body text.
     */
    body: string;
}
export declare class TeamsUpdateDiscussionCommentInOrgRequest extends SpeakeasyBase {
    requestBody: TeamsUpdateDiscussionCommentInOrgRequestBody;
    /**
     * The number that identifies the comment.
     */
    commentNumber: number;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsUpdateDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}

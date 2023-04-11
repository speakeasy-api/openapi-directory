import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetDiscussionCommentInOrgRequest extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsGetDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}

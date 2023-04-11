import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForTeamDiscussionCommentRequest extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    reactionId: number;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class ReactionsDeleteForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

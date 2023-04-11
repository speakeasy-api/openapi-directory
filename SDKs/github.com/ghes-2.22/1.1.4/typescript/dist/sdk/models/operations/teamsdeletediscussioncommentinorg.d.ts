import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteDiscussionCommentInOrgRequest extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsDeleteDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

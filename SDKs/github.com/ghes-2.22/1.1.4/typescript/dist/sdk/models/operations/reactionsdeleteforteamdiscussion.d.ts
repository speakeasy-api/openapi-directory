import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForTeamDiscussionRequest extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    reactionId: number;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class ReactionsDeleteForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

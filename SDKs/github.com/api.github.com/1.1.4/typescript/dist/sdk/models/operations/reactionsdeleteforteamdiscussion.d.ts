import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForTeamDiscussionRequest extends SpeakeasyBase {
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the reaction.
     */
    reactionId: number;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class ReactionsDeleteForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

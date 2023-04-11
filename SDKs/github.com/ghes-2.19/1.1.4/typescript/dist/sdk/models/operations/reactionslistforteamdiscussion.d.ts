import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
 */
export declare enum ReactionsListForTeamDiscussionContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionRequest extends SpeakeasyBase {
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
     */
    content?: ReactionsListForTeamDiscussionContentEnum;
    discussionNumber: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reactions?: shared.Reaction[];
}

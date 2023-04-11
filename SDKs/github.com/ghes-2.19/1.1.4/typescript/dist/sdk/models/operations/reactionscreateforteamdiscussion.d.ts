import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the team discussion.
 */
export declare enum ReactionsCreateForTeamDiscussionRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the team discussion.
     */
    content: ReactionsCreateForTeamDiscussionRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionRequestBody;
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
}

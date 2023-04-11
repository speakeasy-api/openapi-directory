import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types) to add to the team discussion comment.
 */
export declare enum ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types) to add to the team discussion comment.
     */
    content: ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionCommentRequestBody;
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
}

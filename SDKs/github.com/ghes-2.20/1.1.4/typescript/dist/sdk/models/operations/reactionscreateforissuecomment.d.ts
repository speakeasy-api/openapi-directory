import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types) to add to the issue comment.
 */
export declare enum ReactionsCreateForIssueCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForIssueCommentRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types) to add to the issue comment.
     */
    content: ReactionsCreateForIssueCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForIssueCommentRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForIssueCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReactionsCreateForIssueComment415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Reaction exists
     */
    reaction?: shared.Reaction;
    /**
     * Preview header missing
     */
    reactionsCreateForIssueComment415ApplicationJSONObject?: ReactionsCreateForIssueComment415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}

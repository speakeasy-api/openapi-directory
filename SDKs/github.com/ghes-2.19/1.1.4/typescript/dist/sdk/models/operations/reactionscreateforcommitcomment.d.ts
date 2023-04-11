import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the commit comment.
 */
export declare enum ReactionsCreateForCommitCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForCommitCommentRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the commit comment.
     */
    content: ReactionsCreateForCommitCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForCommitCommentRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForCommitCommentRequestBody;
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
export declare class ReactionsCreateForCommitComment415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForCommitCommentResponse extends SpeakeasyBase {
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
    reactionsCreateForCommitComment415ApplicationJSONObject?: ReactionsCreateForCommitComment415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types) to add to the issue.
 */
export declare enum ReactionsCreateForIssueRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForIssueRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types) to add to the issue.
     */
    content: ReactionsCreateForIssueRequestBodyContentEnum;
}
export declare class ReactionsCreateForIssueRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForIssueRequestBody;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class ReactionsCreateForIssueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}

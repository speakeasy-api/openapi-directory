import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePullRequestTitleXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestTitle = "CodeCommit_20150413.UpdatePullRequestTitle"
}
export declare class UpdatePullRequestTitleRequest extends SpeakeasyBase {
    updatePullRequestTitleInput: shared.UpdatePullRequestTitleInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestTitleXAmzTargetEnum;
}
export declare class UpdatePullRequestTitleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidTitleException
     */
    invalidTitleException?: any;
    /**
     * PullRequestAlreadyClosedException
     */
    pullRequestAlreadyClosedException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TitleRequiredException
     */
    titleRequiredException?: any;
    /**
     * Success
     */
    updatePullRequestTitleOutput?: shared.UpdatePullRequestTitleOutput;
}

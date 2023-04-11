import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePullRequestDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestDescription = "CodeCommit_20150413.UpdatePullRequestDescription"
}
export declare class UpdatePullRequestDescriptionRequest extends SpeakeasyBase {
    updatePullRequestDescriptionInput: shared.UpdatePullRequestDescriptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestDescriptionXAmzTargetEnum;
}
export declare class UpdatePullRequestDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidDescriptionException
     */
    invalidDescriptionException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
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
     * Success
     */
    updatePullRequestDescriptionOutput?: shared.UpdatePullRequestDescriptionOutput;
}

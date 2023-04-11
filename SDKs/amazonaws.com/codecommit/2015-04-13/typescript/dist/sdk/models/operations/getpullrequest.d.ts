import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPullRequestXAmzTargetEnum {
    CodeCommit20150413GetPullRequest = "CodeCommit_20150413.GetPullRequest"
}
export declare class GetPullRequestRequest extends SpeakeasyBase {
    getPullRequestInput: shared.GetPullRequestInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestXAmzTargetEnum;
}
export declare class GetPullRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EncryptionIntegrityChecksFailedException
     */
    encryptionIntegrityChecksFailedException?: any;
    /**
     * EncryptionKeyAccessDeniedException
     */
    encryptionKeyAccessDeniedException?: any;
    /**
     * EncryptionKeyDisabledException
     */
    encryptionKeyDisabledException?: any;
    /**
     * EncryptionKeyNotFoundException
     */
    encryptionKeyNotFoundException?: any;
    /**
     * EncryptionKeyUnavailableException
     */
    encryptionKeyUnavailableException?: any;
    /**
     * Success
     */
    getPullRequestOutput?: shared.GetPullRequestOutput;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
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
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommentsForPullRequestXAmzTargetEnum {
    CodeCommit20150413GetCommentsForPullRequest = "CodeCommit_20150413.GetCommentsForPullRequest"
}
export declare class GetCommentsForPullRequestRequest extends SpeakeasyBase {
    getCommentsForPullRequestInput: shared.GetCommentsForPullRequestInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentsForPullRequestXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetCommentsForPullRequestResponse extends SpeakeasyBase {
    /**
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
    /**
     * CommitIdRequiredException
     */
    commitIdRequiredException?: any;
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
    getCommentsForPullRequestOutput?: shared.GetCommentsForPullRequestOutput;
    /**
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * RepositoryNotAssociatedWithPullRequestException
     */
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

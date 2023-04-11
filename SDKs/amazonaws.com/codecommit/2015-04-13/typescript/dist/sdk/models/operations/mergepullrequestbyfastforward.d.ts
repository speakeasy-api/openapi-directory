import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MergePullRequestByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergePullRequestByFastForward = "CodeCommit_20150413.MergePullRequestByFastForward"
}
export declare class MergePullRequestByFastForwardRequest extends SpeakeasyBase {
    mergePullRequestByFastForwardInput: shared.MergePullRequestByFastForwardInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergePullRequestByFastForwardXAmzTargetEnum;
}
export declare class MergePullRequestByFastForwardResponse extends SpeakeasyBase {
    /**
     * ConcurrentReferenceUpdateException
     */
    concurrentReferenceUpdateException?: any;
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
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * ManualMergeRequiredException
     */
    manualMergeRequiredException?: any;
    /**
     * Success
     */
    mergePullRequestByFastForwardOutput?: shared.MergePullRequestByFastForwardOutput;
    /**
     * PullRequestAlreadyClosedException
     */
    pullRequestAlreadyClosedException?: any;
    /**
     * PullRequestApprovalRulesNotSatisfiedException
     */
    pullRequestApprovalRulesNotSatisfiedException?: any;
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
     * ReferenceDoesNotExistException
     */
    referenceDoesNotExistException?: any;
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
    /**
     * TipOfSourceReferenceIsDifferentException
     */
    tipOfSourceReferenceIsDifferentException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MergePullRequestByThreeWayXAmzTargetEnum {
    CodeCommit20150413MergePullRequestByThreeWay = "CodeCommit_20150413.MergePullRequestByThreeWay"
}
export declare class MergePullRequestByThreeWayRequest extends SpeakeasyBase {
    mergePullRequestByThreeWayInput: shared.MergePullRequestByThreeWayInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergePullRequestByThreeWayXAmzTargetEnum;
}
export declare class MergePullRequestByThreeWayResponse extends SpeakeasyBase {
    /**
     * CommitMessageLengthExceededException
     */
    commitMessageLengthExceededException?: any;
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
     * FileContentSizeLimitExceededException
     */
    fileContentSizeLimitExceededException?: any;
    /**
     * FolderContentSizeLimitExceededException
     */
    folderContentSizeLimitExceededException?: any;
    /**
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
    /**
     * InvalidConflictDetailLevelException
     */
    invalidConflictDetailLevelException?: any;
    /**
     * InvalidConflictResolutionException
     */
    invalidConflictResolutionException?: any;
    /**
     * InvalidConflictResolutionStrategyException
     */
    invalidConflictResolutionStrategyException?: any;
    /**
     * InvalidEmailException
     */
    invalidEmailException?: any;
    /**
     * InvalidFileModeException
     */
    invalidFileModeException?: any;
    /**
     * InvalidPathException
     */
    invalidPathException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidReplacementContentException
     */
    invalidReplacementContentException?: any;
    /**
     * InvalidReplacementTypeException
     */
    invalidReplacementTypeException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * ManualMergeRequiredException
     */
    manualMergeRequiredException?: any;
    /**
     * MaximumConflictResolutionEntriesExceededException
     */
    maximumConflictResolutionEntriesExceededException?: any;
    /**
     * MaximumFileContentToLoadExceededException
     */
    maximumFileContentToLoadExceededException?: any;
    /**
     * MaximumItemsToCompareExceededException
     */
    maximumItemsToCompareExceededException?: any;
    /**
     * Success
     */
    mergePullRequestByThreeWayOutput?: shared.MergePullRequestByThreeWayOutput;
    /**
     * MultipleConflictResolutionEntriesException
     */
    multipleConflictResolutionEntriesException?: any;
    /**
     * NameLengthExceededException
     */
    nameLengthExceededException?: any;
    /**
     * PathRequiredException
     */
    pathRequiredException?: any;
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
    /**
     * ReplacementContentRequiredException
     */
    replacementContentRequiredException?: any;
    /**
     * ReplacementTypeRequiredException
     */
    replacementTypeRequiredException?: any;
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
    /**
     * TipOfSourceReferenceIsDifferentException
     */
    tipOfSourceReferenceIsDifferentException?: any;
    /**
     * TipsDivergenceExceededException
     */
    tipsDivergenceExceededException?: any;
}

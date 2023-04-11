import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MergeBranchesBySquashXAmzTargetEnum {
    CodeCommit20150413MergeBranchesBySquash = "CodeCommit_20150413.MergeBranchesBySquash"
}
export declare class MergeBranchesBySquashRequest extends SpeakeasyBase {
    mergeBranchesBySquashInput: shared.MergeBranchesBySquashInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeBranchesBySquashXAmzTargetEnum;
}
export declare class MergeBranchesBySquashResponse extends SpeakeasyBase {
    /**
     * BranchDoesNotExistException
     */
    branchDoesNotExistException?: any;
    /**
     * BranchNameIsTagNameException
     */
    branchNameIsTagNameException?: any;
    /**
     * BranchNameRequiredException
     */
    branchNameRequiredException?: any;
    /**
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
    /**
     * CommitMessageLengthExceededException
     */
    commitMessageLengthExceededException?: any;
    /**
     * CommitRequiredException
     */
    commitRequiredException?: any;
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
     * FileModeRequiredException
     */
    fileModeRequiredException?: any;
    /**
     * FolderContentSizeLimitExceededException
     */
    folderContentSizeLimitExceededException?: any;
    /**
     * InvalidBranchNameException
     */
    invalidBranchNameException?: any;
    /**
     * InvalidCommitException
     */
    invalidCommitException?: any;
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
     * InvalidTargetBranchException
     */
    invalidTargetBranchException?: any;
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
    mergeBranchesBySquashOutput?: shared.MergeBranchesBySquashOutput;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TipsDivergenceExceededException
     */
    tipsDivergenceExceededException?: any;
}

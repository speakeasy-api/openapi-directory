import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUnreferencedMergeCommitXAmzTargetEnum {
    CodeCommit20150413CreateUnreferencedMergeCommit = "CodeCommit_20150413.CreateUnreferencedMergeCommit"
}
export declare class CreateUnreferencedMergeCommitRequest extends SpeakeasyBase {
    createUnreferencedMergeCommitInput: shared.CreateUnreferencedMergeCommitInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUnreferencedMergeCommitXAmzTargetEnum;
}
export declare class CreateUnreferencedMergeCommitResponse extends SpeakeasyBase {
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
     * Success
     */
    createUnreferencedMergeCommitOutput?: shared.CreateUnreferencedMergeCommitOutput;
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
     * InvalidMergeOptionException
     */
    invalidMergeOptionException?: any;
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
     * MergeOptionRequiredException
     */
    mergeOptionRequiredException?: any;
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

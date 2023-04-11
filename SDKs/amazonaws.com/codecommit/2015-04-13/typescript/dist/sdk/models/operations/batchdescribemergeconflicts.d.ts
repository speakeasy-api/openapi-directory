import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413BatchDescribeMergeConflicts = "CodeCommit_20150413.BatchDescribeMergeConflicts"
}
export declare class BatchDescribeMergeConflictsRequest extends SpeakeasyBase {
    batchDescribeMergeConflictsInput: shared.BatchDescribeMergeConflictsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDescribeMergeConflictsXAmzTargetEnum;
}
export declare class BatchDescribeMergeConflictsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDescribeMergeConflictsOutput?: shared.BatchDescribeMergeConflictsOutput;
    /**
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
    /**
     * CommitRequiredException
     */
    commitRequiredException?: any;
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
     * InvalidCommitException
     */
    invalidCommitException?: any;
    /**
     * InvalidConflictDetailLevelException
     */
    invalidConflictDetailLevelException?: any;
    /**
     * InvalidConflictResolutionStrategyException
     */
    invalidConflictResolutionStrategyException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxConflictFilesException
     */
    invalidMaxConflictFilesException?: any;
    /**
     * InvalidMaxMergeHunksException
     */
    invalidMaxMergeHunksException?: any;
    /**
     * InvalidMergeOptionException
     */
    invalidMergeOptionException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
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

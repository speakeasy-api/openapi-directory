import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMergeConflictsXAmzTargetEnum {
    CodeCommit20150413DescribeMergeConflicts = "CodeCommit_20150413.DescribeMergeConflicts"
}
export declare class DescribeMergeConflictsRequest extends SpeakeasyBase {
    describeMergeConflictsInput: shared.DescribeMergeConflictsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMergeConflictsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxMergeHunks?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeMergeConflictsResponse extends SpeakeasyBase {
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
     * Success
     */
    describeMergeConflictsOutput?: shared.DescribeMergeConflictsOutput;
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
     * FileDoesNotExistException
     */
    fileDoesNotExistException?: any;
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
     * InvalidMaxMergeHunksException
     */
    invalidMaxMergeHunksException?: any;
    /**
     * InvalidMergeOptionException
     */
    invalidMergeOptionException?: any;
    /**
     * InvalidPathException
     */
    invalidPathException?: any;
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
     * PathRequiredException
     */
    pathRequiredException?: any;
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

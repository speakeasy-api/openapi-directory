import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MergeBranchesByFastForwardXAmzTargetEnum {
    CodeCommit20150413MergeBranchesByFastForward = "CodeCommit_20150413.MergeBranchesByFastForward"
}
export declare class MergeBranchesByFastForwardRequest extends SpeakeasyBase {
    mergeBranchesByFastForwardInput: shared.MergeBranchesByFastForwardInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeBranchesByFastForwardXAmzTargetEnum;
}
export declare class MergeBranchesByFastForwardResponse extends SpeakeasyBase {
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
     * InvalidBranchNameException
     */
    invalidBranchNameException?: any;
    /**
     * InvalidCommitException
     */
    invalidCommitException?: any;
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
     * Success
     */
    mergeBranchesByFastForwardOutput?: shared.MergeBranchesByFastForwardOutput;
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

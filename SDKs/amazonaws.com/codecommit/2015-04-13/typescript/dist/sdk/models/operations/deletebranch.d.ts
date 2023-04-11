import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBranchXAmzTargetEnum {
    CodeCommit20150413DeleteBranch = "CodeCommit_20150413.DeleteBranch"
}
export declare class DeleteBranchRequest extends SpeakeasyBase {
    deleteBranchInput: shared.DeleteBranchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBranchXAmzTargetEnum;
}
export declare class DeleteBranchResponse extends SpeakeasyBase {
    /**
     * BranchNameRequiredException
     */
    branchNameRequiredException?: any;
    contentType: string;
    /**
     * DefaultBranchCannotBeDeletedException
     */
    defaultBranchCannotBeDeletedException?: any;
    /**
     * Success
     */
    deleteBranchOutput?: shared.DeleteBranchOutput;
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
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
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
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDefaultBranchXAmzTargetEnum {
    CodeCommit20150413UpdateDefaultBranch = "CodeCommit_20150413.UpdateDefaultBranch"
}
export declare class UpdateDefaultBranchRequest extends SpeakeasyBase {
    updateDefaultBranchInput: shared.UpdateDefaultBranchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDefaultBranchXAmzTargetEnum;
}
export declare class UpdateDefaultBranchResponse extends SpeakeasyBase {
    /**
     * BranchDoesNotExistException
     */
    branchDoesNotExistException?: any;
    /**
     * BranchNameRequiredException
     */
    branchNameRequiredException?: any;
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

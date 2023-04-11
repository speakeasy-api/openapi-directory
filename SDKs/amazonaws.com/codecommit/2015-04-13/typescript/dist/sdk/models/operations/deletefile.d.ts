import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFileXAmzTargetEnum {
    CodeCommit20150413DeleteFile = "CodeCommit_20150413.DeleteFile"
}
export declare class DeleteFileRequest extends SpeakeasyBase {
    deleteFileInput: shared.DeleteFileInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFileXAmzTargetEnum;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
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
     * CommitMessageLengthExceededException
     */
    commitMessageLengthExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFileOutput?: shared.DeleteFileOutput;
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
     * InvalidBranchNameException
     */
    invalidBranchNameException?: any;
    /**
     * InvalidEmailException
     */
    invalidEmailException?: any;
    /**
     * InvalidParentCommitIdException
     */
    invalidParentCommitIdException?: any;
    /**
     * InvalidPathException
     */
    invalidPathException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * NameLengthExceededException
     */
    nameLengthExceededException?: any;
    /**
     * ParentCommitDoesNotExistException
     */
    parentCommitDoesNotExistException?: any;
    /**
     * ParentCommitIdOutdatedException
     */
    parentCommitIdOutdatedException?: any;
    /**
     * ParentCommitIdRequiredException
     */
    parentCommitIdRequiredException?: any;
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
}

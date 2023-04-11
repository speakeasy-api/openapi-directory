import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutFileXAmzTargetEnum {
    CodeCommit20150413PutFile = "CodeCommit_20150413.PutFile"
}
export declare class PutFileRequest extends SpeakeasyBase {
    putFileInput: shared.PutFileInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutFileXAmzTargetEnum;
}
export declare class PutFileResponse extends SpeakeasyBase {
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
     * DirectoryNameConflictsWithFileNameException
     */
    directoryNameConflictsWithFileNameException?: any;
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
     * FileContentRequiredException
     */
    fileContentRequiredException?: any;
    /**
     * FileContentSizeLimitExceededException
     */
    fileContentSizeLimitExceededException?: any;
    /**
     * FileNameConflictsWithDirectoryNameException
     */
    fileNameConflictsWithDirectoryNameException?: any;
    /**
     * FilePathConflictsWithSubmodulePathException
     */
    filePathConflictsWithSubmodulePathException?: any;
    /**
     * FolderContentSizeLimitExceededException
     */
    folderContentSizeLimitExceededException?: any;
    /**
     * InvalidBranchNameException
     */
    invalidBranchNameException?: any;
    /**
     * InvalidDeletionParameterException
     */
    invalidDeletionParameterException?: any;
    /**
     * InvalidEmailException
     */
    invalidEmailException?: any;
    /**
     * InvalidFileModeException
     */
    invalidFileModeException?: any;
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
     * Success
     */
    putFileOutput?: shared.PutFileOutput;
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
     * SameFileContentException
     */
    sameFileContentException?: any;
}

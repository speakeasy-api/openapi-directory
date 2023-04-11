import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCommitXAmzTargetEnum {
    CodeCommit20150413CreateCommit = "CodeCommit_20150413.CreateCommit"
}
export declare class CreateCommitRequest extends SpeakeasyBase {
    createCommitInput: shared.CreateCommitInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCommitXAmzTargetEnum;
}
export declare class CreateCommitResponse extends SpeakeasyBase {
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
    createCommitOutput?: shared.CreateCommitOutput;
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
     * FileContentAndSourceFileSpecifiedException
     */
    fileContentAndSourceFileSpecifiedException?: any;
    /**
     * FileContentSizeLimitExceededException
     */
    fileContentSizeLimitExceededException?: any;
    /**
     * FileDoesNotExistException
     */
    fileDoesNotExistException?: any;
    /**
     * FileEntryRequiredException
     */
    fileEntryRequiredException?: any;
    /**
     * FileModeRequiredException
     */
    fileModeRequiredException?: any;
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
     * MaximumFileEntriesExceededException
     */
    maximumFileEntriesExceededException?: any;
    /**
     * NameLengthExceededException
     */
    nameLengthExceededException?: any;
    /**
     * NoChangeException
     */
    noChangeException?: any;
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
     * PutFileEntryConflictException
     */
    putFileEntryConflictException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * RestrictedSourceFileException
     */
    restrictedSourceFileException?: any;
    /**
     * SamePathRequestException
     */
    samePathRequestException?: any;
    /**
     * SourceFileOrContentRequiredException
     */
    sourceFileOrContentRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

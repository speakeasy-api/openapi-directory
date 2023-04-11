import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFileXAmzTargetEnum {
    CodeCommit20150413GetFile = "CodeCommit_20150413.GetFile"
}
export declare class GetFileRequest extends SpeakeasyBase {
    getFileInput: shared.GetFileInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFileXAmzTargetEnum;
}
export declare class GetFileResponse extends SpeakeasyBase {
    /**
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
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
     * FileDoesNotExistException
     */
    fileDoesNotExistException?: any;
    /**
     * FileTooLargeException
     */
    fileTooLargeException?: any;
    /**
     * Success
     */
    getFileOutput?: shared.GetFileOutput;
    /**
     * InvalidCommitException
     */
    invalidCommitException?: any;
    /**
     * InvalidPathException
     */
    invalidPathException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
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

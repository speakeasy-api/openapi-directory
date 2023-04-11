import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFolderXAmzTargetEnum {
    CodeCommit20150413GetFolder = "CodeCommit_20150413.GetFolder"
}
export declare class GetFolderRequest extends SpeakeasyBase {
    getFolderInput: shared.GetFolderInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFolderXAmzTargetEnum;
}
export declare class GetFolderResponse extends SpeakeasyBase {
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
     * FolderDoesNotExistException
     */
    folderDoesNotExistException?: any;
    /**
     * Success
     */
    getFolderOutput?: shared.GetFolderOutput;
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

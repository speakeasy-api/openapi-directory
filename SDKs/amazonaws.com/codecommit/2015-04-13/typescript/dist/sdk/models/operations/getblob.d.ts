import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBlobXAmzTargetEnum {
    CodeCommit20150413GetBlob = "CodeCommit_20150413.GetBlob"
}
export declare class GetBlobRequest extends SpeakeasyBase {
    getBlobInput: shared.GetBlobInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlobXAmzTargetEnum;
}
export declare class GetBlobResponse extends SpeakeasyBase {
    /**
     * BlobIdDoesNotExistException
     */
    blobIdDoesNotExistException?: any;
    /**
     * BlobIdRequiredException
     */
    blobIdRequiredException?: any;
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
     * FileTooLargeException
     */
    fileTooLargeException?: any;
    /**
     * Success
     */
    getBlobOutput?: shared.GetBlobOutput;
    /**
     * InvalidBlobIdException
     */
    invalidBlobIdException?: any;
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

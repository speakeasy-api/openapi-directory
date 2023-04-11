import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommitXAmzTargetEnum {
    CodeCommit20150413GetCommit = "CodeCommit_20150413.GetCommit"
}
export declare class GetCommitRequest extends SpeakeasyBase {
    getCommitInput: shared.GetCommitInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommitXAmzTargetEnum;
}
export declare class GetCommitResponse extends SpeakeasyBase {
    /**
     * CommitIdDoesNotExistException
     */
    commitIdDoesNotExistException?: any;
    /**
     * CommitIdRequiredException
     */
    commitIdRequiredException?: any;
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
     * Success
     */
    getCommitOutput?: shared.GetCommitOutput;
    /**
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
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

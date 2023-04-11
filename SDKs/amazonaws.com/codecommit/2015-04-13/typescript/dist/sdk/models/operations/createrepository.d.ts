import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRepositoryXAmzTargetEnum {
    CodeCommit20150413CreateRepository = "CodeCommit_20150413.CreateRepository"
}
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    createRepositoryInput: shared.CreateRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRepositoryXAmzTargetEnum;
}
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRepositoryOutput?: shared.CreateRepositoryOutput;
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
     * InvalidRepositoryDescriptionException
     */
    invalidRepositoryDescriptionException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * InvalidSystemTagUsageException
     */
    invalidSystemTagUsageException?: any;
    /**
     * InvalidTagsMapException
     */
    invalidTagsMapException?: any;
    /**
     * RepositoryLimitExceededException
     */
    repositoryLimitExceededException?: any;
    /**
     * RepositoryNameExistsException
     */
    repositoryNameExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * TagPolicyException
     */
    tagPolicyException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}

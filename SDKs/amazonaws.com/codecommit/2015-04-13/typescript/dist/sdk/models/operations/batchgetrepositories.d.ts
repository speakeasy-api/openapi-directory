import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchGetRepositories = "CodeCommit_20150413.BatchGetRepositories"
}
export declare class BatchGetRepositoriesRequest extends SpeakeasyBase {
    batchGetRepositoriesInput: shared.BatchGetRepositoriesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetRepositoriesXAmzTargetEnum;
}
export declare class BatchGetRepositoriesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetRepositoriesOutput?: shared.BatchGetRepositoriesOutput;
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
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * MaximumRepositoryNamesExceededException
     */
    maximumRepositoryNamesExceededException?: any;
    /**
     * RepositoryNamesRequiredException
     */
    repositoryNamesRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetCommitsXAmzTargetEnum {
    CodeCommit20150413BatchGetCommits = "CodeCommit_20150413.BatchGetCommits"
}
export declare class BatchGetCommitsRequest extends SpeakeasyBase {
    batchGetCommitsInput: shared.BatchGetCommitsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCommitsXAmzTargetEnum;
}
export declare class BatchGetCommitsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetCommitsOutput?: shared.BatchGetCommitsOutput;
    /**
     * CommitIdsLimitExceededException
     */
    commitIdsLimitExceededException?: any;
    /**
     * CommitIdsListRequiredException
     */
    commitIdsListRequiredException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
}

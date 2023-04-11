import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommentsForComparedCommitXAmzTargetEnum {
    CodeCommit20150413GetCommentsForComparedCommit = "CodeCommit_20150413.GetCommentsForComparedCommit"
}
export declare class GetCommentsForComparedCommitRequest extends SpeakeasyBase {
    getCommentsForComparedCommitInput: shared.GetCommentsForComparedCommitInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentsForComparedCommitXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetCommentsForComparedCommitResponse extends SpeakeasyBase {
    /**
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
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
    getCommentsForComparedCommitOutput?: shared.GetCommentsForComparedCommitOutput;
    /**
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
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

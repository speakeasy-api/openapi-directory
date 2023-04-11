import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePullRequestXAmzTargetEnum {
    CodeCommit20150413CreatePullRequest = "CodeCommit_20150413.CreatePullRequest"
}
export declare class CreatePullRequestRequest extends SpeakeasyBase {
    createPullRequestInput: shared.CreatePullRequestInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePullRequestXAmzTargetEnum;
}
export declare class CreatePullRequestResponse extends SpeakeasyBase {
    /**
     * ClientRequestTokenRequiredException
     */
    clientRequestTokenRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    createPullRequestOutput?: shared.CreatePullRequestOutput;
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
     * IdempotencyParameterMismatchException
     */
    idempotencyParameterMismatchException?: any;
    /**
     * InvalidClientRequestTokenException
     */
    invalidClientRequestTokenException?: any;
    /**
     * InvalidDescriptionException
     */
    invalidDescriptionException?: any;
    /**
     * InvalidReferenceNameException
     */
    invalidReferenceNameException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * InvalidTargetException
     */
    invalidTargetException?: any;
    /**
     * InvalidTargetsException
     */
    invalidTargetsException?: any;
    /**
     * InvalidTitleException
     */
    invalidTitleException?: any;
    /**
     * MaximumOpenPullRequestsExceededException
     */
    maximumOpenPullRequestsExceededException?: any;
    /**
     * MultipleRepositoriesInPullRequestException
     */
    multipleRepositoriesInPullRequestException?: any;
    /**
     * ReferenceDoesNotExistException
     */
    referenceDoesNotExistException?: any;
    /**
     * ReferenceNameRequiredException
     */
    referenceNameRequiredException?: any;
    /**
     * ReferenceTypeNotSupportedException
     */
    referenceTypeNotSupportedException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * SourceAndDestinationAreSameException
     */
    sourceAndDestinationAreSameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetRequiredException
     */
    targetRequiredException?: any;
    /**
     * TargetsRequiredException
     */
    targetsRequiredException?: any;
    /**
     * TitleRequiredException
     */
    titleRequiredException?: any;
}

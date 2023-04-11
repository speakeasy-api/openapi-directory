import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPullRequestOverrideStateXAmzTargetEnum {
    CodeCommit20150413GetPullRequestOverrideState = "CodeCommit_20150413.GetPullRequestOverrideState"
}
export declare class GetPullRequestOverrideStateRequest extends SpeakeasyBase {
    getPullRequestOverrideStateInput: shared.GetPullRequestOverrideStateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestOverrideStateXAmzTargetEnum;
}
export declare class GetPullRequestOverrideStateResponse extends SpeakeasyBase {
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
    getPullRequestOverrideStateOutput?: shared.GetPullRequestOverrideStateOutput;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRevisionIdException
     */
    invalidRevisionIdException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    /**
     * RevisionIdRequiredException
     */
    revisionIdRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

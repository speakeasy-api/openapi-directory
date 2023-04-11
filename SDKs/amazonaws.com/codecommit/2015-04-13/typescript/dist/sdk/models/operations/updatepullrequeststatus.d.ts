import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePullRequestStatusXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestStatus = "CodeCommit_20150413.UpdatePullRequestStatus"
}
export declare class UpdatePullRequestStatusRequest extends SpeakeasyBase {
    updatePullRequestStatusInput: shared.UpdatePullRequestStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestStatusXAmzTargetEnum;
}
export declare class UpdatePullRequestStatusResponse extends SpeakeasyBase {
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
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidPullRequestStatusException
     */
    invalidPullRequestStatusException?: any;
    /**
     * InvalidPullRequestStatusUpdateException
     */
    invalidPullRequestStatusUpdateException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    /**
     * PullRequestStatusRequiredException
     */
    pullRequestStatusRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePullRequestStatusOutput?: shared.UpdatePullRequestStatusOutput;
}

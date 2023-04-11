import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePullRequestApprovalStateXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalState = "CodeCommit_20150413.UpdatePullRequestApprovalState"
}
export declare class UpdatePullRequestApprovalStateRequest extends SpeakeasyBase {
    updatePullRequestApprovalStateInput: shared.UpdatePullRequestApprovalStateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestApprovalStateXAmzTargetEnum;
}
export declare class UpdatePullRequestApprovalStateResponse extends SpeakeasyBase {
    /**
     * ApprovalStateRequiredException
     */
    approvalStateRequiredException?: any;
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
     * InvalidApprovalStateException
     */
    invalidApprovalStateException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRevisionIdException
     */
    invalidRevisionIdException?: any;
    /**
     * MaximumNumberOfApprovalsExceededException
     */
    maximumNumberOfApprovalsExceededException?: any;
    /**
     * PullRequestAlreadyClosedException
     */
    pullRequestAlreadyClosedException?: any;
    /**
     * PullRequestCannotBeApprovedByAuthorException
     */
    pullRequestCannotBeApprovedByAuthorException?: any;
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
    /**
     * RevisionNotCurrentException
     */
    revisionNotCurrentException?: any;
}

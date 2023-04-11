import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPullRequestApprovalStatesXAmzTargetEnum {
    CodeCommit20150413GetPullRequestApprovalStates = "CodeCommit_20150413.GetPullRequestApprovalStates"
}
export declare class GetPullRequestApprovalStatesRequest extends SpeakeasyBase {
    getPullRequestApprovalStatesInput: shared.GetPullRequestApprovalStatesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestApprovalStatesXAmzTargetEnum;
}
export declare class GetPullRequestApprovalStatesResponse extends SpeakeasyBase {
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
    getPullRequestApprovalStatesOutput?: shared.GetPullRequestApprovalStatesOutput;
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

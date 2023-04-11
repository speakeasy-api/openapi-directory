import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePullRequestApprovalRuleContentXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalRuleContent = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"
}
export declare class UpdatePullRequestApprovalRuleContentRequest extends SpeakeasyBase {
    updatePullRequestApprovalRuleContentInput: shared.UpdatePullRequestApprovalRuleContentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
}
export declare class UpdatePullRequestApprovalRuleContentResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleContentRequiredException
     */
    approvalRuleContentRequiredException?: any;
    /**
     * ApprovalRuleDoesNotExistException
     */
    approvalRuleDoesNotExistException?: any;
    /**
     * ApprovalRuleNameRequiredException
     */
    approvalRuleNameRequiredException?: any;
    /**
     * CannotModifyApprovalRuleFromTemplateException
     */
    cannotModifyApprovalRuleFromTemplateException?: any;
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
     * InvalidApprovalRuleContentException
     */
    invalidApprovalRuleContentException?: any;
    /**
     * InvalidApprovalRuleNameException
     */
    invalidApprovalRuleNameException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRuleContentSha256Exception
     */
    invalidRuleContentSha256Exception?: any;
    /**
     * PullRequestAlreadyClosedException
     */
    pullRequestAlreadyClosedException?: any;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePullRequestApprovalRuleContentOutput?: shared.UpdatePullRequestApprovalRuleContentOutput;
}

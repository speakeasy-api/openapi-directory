import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413DeletePullRequestApprovalRule = "CodeCommit_20150413.DeletePullRequestApprovalRule"
}
export declare class DeletePullRequestApprovalRuleRequest extends SpeakeasyBase {
    deletePullRequestApprovalRuleInput: shared.DeletePullRequestApprovalRuleInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePullRequestApprovalRuleXAmzTargetEnum;
}
export declare class DeletePullRequestApprovalRuleResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleNameRequiredException
     */
    approvalRuleNameRequiredException?: any;
    /**
     * CannotDeleteApprovalRuleFromTemplateException
     */
    cannotDeleteApprovalRuleFromTemplateException?: any;
    contentType: string;
    /**
     * Success
     */
    deletePullRequestApprovalRuleOutput?: shared.DeletePullRequestApprovalRuleOutput;
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
     * InvalidApprovalRuleNameException
     */
    invalidApprovalRuleNameException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
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
}

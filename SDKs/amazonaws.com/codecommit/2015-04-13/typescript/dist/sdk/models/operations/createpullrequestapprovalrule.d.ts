import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413CreatePullRequestApprovalRule = "CodeCommit_20150413.CreatePullRequestApprovalRule"
}
export declare class CreatePullRequestApprovalRuleRequest extends SpeakeasyBase {
    createPullRequestApprovalRuleInput: shared.CreatePullRequestApprovalRuleInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePullRequestApprovalRuleXAmzTargetEnum;
}
export declare class CreatePullRequestApprovalRuleResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleContentRequiredException
     */
    approvalRuleContentRequiredException?: any;
    /**
     * ApprovalRuleNameAlreadyExistsException
     */
    approvalRuleNameAlreadyExistsException?: any;
    /**
     * ApprovalRuleNameRequiredException
     */
    approvalRuleNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    createPullRequestApprovalRuleOutput?: shared.CreatePullRequestApprovalRuleOutput;
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
     * NumberOfRulesExceededException
     */
    numberOfRulesExceededException?: any;
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

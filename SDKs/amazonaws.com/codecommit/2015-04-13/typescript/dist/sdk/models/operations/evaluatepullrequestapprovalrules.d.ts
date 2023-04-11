import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EvaluatePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413EvaluatePullRequestApprovalRules = "CodeCommit_20150413.EvaluatePullRequestApprovalRules"
}
export declare class EvaluatePullRequestApprovalRulesRequest extends SpeakeasyBase {
    evaluatePullRequestApprovalRulesInput: shared.EvaluatePullRequestApprovalRulesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EvaluatePullRequestApprovalRulesXAmzTargetEnum;
}
export declare class EvaluatePullRequestApprovalRulesResponse extends SpeakeasyBase {
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
    evaluatePullRequestApprovalRulesOutput?: shared.EvaluatePullRequestApprovalRulesOutput;
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
    /**
     * RevisionNotCurrentException
     */
    revisionNotCurrentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

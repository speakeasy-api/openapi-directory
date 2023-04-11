import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum OverridePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413OverridePullRequestApprovalRules = "CodeCommit_20150413.OverridePullRequestApprovalRules"
}
export declare class OverridePullRequestApprovalRulesRequest extends SpeakeasyBase {
    overridePullRequestApprovalRulesInput: shared.OverridePullRequestApprovalRulesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OverridePullRequestApprovalRulesXAmzTargetEnum;
}
export declare class OverridePullRequestApprovalRulesResponse extends SpeakeasyBase {
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
     * InvalidOverrideStatusException
     */
    invalidOverrideStatusException?: any;
    /**
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
    /**
     * InvalidRevisionIdException
     */
    invalidRevisionIdException?: any;
    /**
     * OverrideAlreadySetException
     */
    overrideAlreadySetException?: any;
    /**
     * OverrideStatusRequiredException
     */
    overrideStatusRequiredException?: any;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413ListRepositoriesForApprovalRuleTemplate = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"
}
export declare class ListRepositoriesForApprovalRuleTemplateRequest extends SpeakeasyBase {
    listRepositoriesForApprovalRuleTemplateInput: shared.ListRepositoriesForApprovalRuleTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRepositoriesForApprovalRuleTemplateResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateDoesNotExistException
     */
    approvalRuleTemplateDoesNotExistException?: any;
    /**
     * ApprovalRuleTemplateNameRequiredException
     */
    approvalRuleTemplateNameRequiredException?: any;
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
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * Success
     */
    listRepositoriesForApprovalRuleTemplateOutput?: shared.ListRepositoriesForApprovalRuleTemplateOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

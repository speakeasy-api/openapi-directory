import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"
}
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest extends SpeakeasyBase {
    batchAssociateApprovalRuleTemplateWithRepositoriesInput: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
}
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateDoesNotExistException
     */
    approvalRuleTemplateDoesNotExistException?: any;
    /**
     * ApprovalRuleTemplateNameRequiredException
     */
    approvalRuleTemplateNameRequiredException?: any;
    /**
     * Success
     */
    batchAssociateApprovalRuleTemplateWithRepositoriesOutput?: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
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
     * MaximumRepositoryNamesExceededException
     */
    maximumRepositoryNamesExceededException?: any;
    /**
     * RepositoryNamesRequiredException
     */
    repositoryNamesRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

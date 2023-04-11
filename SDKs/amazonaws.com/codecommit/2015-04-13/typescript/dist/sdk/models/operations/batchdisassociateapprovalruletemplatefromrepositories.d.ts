import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"
}
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest extends SpeakeasyBase {
    batchDisassociateApprovalRuleTemplateFromRepositoriesInput: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;
}
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse extends SpeakeasyBase {
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
    batchDisassociateApprovalRuleTemplateFromRepositoriesOutput?: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
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

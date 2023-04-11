import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum {
    CodeCommit20150413AssociateApprovalRuleTemplateWithRepository = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository"
}
export declare class AssociateApprovalRuleTemplateWithRepositoryRequest extends SpeakeasyBase {
    associateApprovalRuleTemplateWithRepositoryInput: shared.AssociateApprovalRuleTemplateWithRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
}
export declare class AssociateApprovalRuleTemplateWithRepositoryResponse extends SpeakeasyBase {
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
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * MaximumRuleTemplatesAssociatedWithRepositoryException
     */
    maximumRuleTemplatesAssociatedWithRepositoryException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

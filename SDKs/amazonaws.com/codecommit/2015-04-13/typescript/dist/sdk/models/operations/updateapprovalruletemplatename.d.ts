import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApprovalRuleTemplateNameXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateName = "CodeCommit_20150413.UpdateApprovalRuleTemplateName"
}
export declare class UpdateApprovalRuleTemplateNameRequest extends SpeakeasyBase {
    updateApprovalRuleTemplateNameInput: shared.UpdateApprovalRuleTemplateNameInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateNameXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateNameResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateDoesNotExistException
     */
    approvalRuleTemplateDoesNotExistException?: any;
    /**
     * ApprovalRuleTemplateNameAlreadyExistsException
     */
    approvalRuleTemplateNameAlreadyExistsException?: any;
    /**
     * ApprovalRuleTemplateNameRequiredException
     */
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApprovalRuleTemplateNameOutput?: shared.UpdateApprovalRuleTemplateNameOutput;
}

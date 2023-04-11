import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateDescription = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"
}
export declare class UpdateApprovalRuleTemplateDescriptionRequest extends SpeakeasyBase {
    updateApprovalRuleTemplateDescriptionInput: shared.UpdateApprovalRuleTemplateDescriptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateDescriptionResponse extends SpeakeasyBase {
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
     * InvalidApprovalRuleTemplateDescriptionException
     */
    invalidApprovalRuleTemplateDescriptionException?: any;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApprovalRuleTemplateDescriptionOutput?: shared.UpdateApprovalRuleTemplateDescriptionOutput;
}

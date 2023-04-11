import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413DeleteApprovalRuleTemplate = "CodeCommit_20150413.DeleteApprovalRuleTemplate"
}
export declare class DeleteApprovalRuleTemplateRequest extends SpeakeasyBase {
    deleteApprovalRuleTemplateInput: shared.DeleteApprovalRuleTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApprovalRuleTemplateXAmzTargetEnum;
}
export declare class DeleteApprovalRuleTemplateResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateInUseException
     */
    approvalRuleTemplateInUseException?: any;
    /**
     * ApprovalRuleTemplateNameRequiredException
     */
    approvalRuleTemplateNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApprovalRuleTemplateOutput?: shared.DeleteApprovalRuleTemplateOutput;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

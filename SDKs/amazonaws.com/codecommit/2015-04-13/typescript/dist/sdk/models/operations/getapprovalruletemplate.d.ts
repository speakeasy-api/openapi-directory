import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413GetApprovalRuleTemplate = "CodeCommit_20150413.GetApprovalRuleTemplate"
}
export declare class GetApprovalRuleTemplateRequest extends SpeakeasyBase {
    getApprovalRuleTemplateInput: shared.GetApprovalRuleTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApprovalRuleTemplateXAmzTargetEnum;
}
export declare class GetApprovalRuleTemplateResponse extends SpeakeasyBase {
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
     * Success
     */
    getApprovalRuleTemplateOutput?: shared.GetApprovalRuleTemplateOutput;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

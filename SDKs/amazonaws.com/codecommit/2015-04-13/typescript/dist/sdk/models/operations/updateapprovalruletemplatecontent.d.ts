import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApprovalRuleTemplateContentXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateContent = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent"
}
export declare class UpdateApprovalRuleTemplateContentRequest extends SpeakeasyBase {
    updateApprovalRuleTemplateContentInput: shared.UpdateApprovalRuleTemplateContentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApprovalRuleTemplateContentXAmzTargetEnum;
}
export declare class UpdateApprovalRuleTemplateContentResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateContentRequiredException
     */
    approvalRuleTemplateContentRequiredException?: any;
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
     * InvalidApprovalRuleTemplateContentException
     */
    invalidApprovalRuleTemplateContentException?: any;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    /**
     * InvalidRuleContentSha256Exception
     */
    invalidRuleContentSha256Exception?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApprovalRuleTemplateContentOutput?: shared.UpdateApprovalRuleTemplateContentOutput;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413CreateApprovalRuleTemplate = "CodeCommit_20150413.CreateApprovalRuleTemplate"
}
export declare class CreateApprovalRuleTemplateRequest extends SpeakeasyBase {
    createApprovalRuleTemplateInput: shared.CreateApprovalRuleTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApprovalRuleTemplateXAmzTargetEnum;
}
export declare class CreateApprovalRuleTemplateResponse extends SpeakeasyBase {
    /**
     * ApprovalRuleTemplateContentRequiredException
     */
    approvalRuleTemplateContentRequiredException?: any;
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
     * Success
     */
    createApprovalRuleTemplateOutput?: shared.CreateApprovalRuleTemplateOutput;
    /**
     * InvalidApprovalRuleTemplateContentException
     */
    invalidApprovalRuleTemplateContentException?: any;
    /**
     * InvalidApprovalRuleTemplateDescriptionException
     */
    invalidApprovalRuleTemplateDescriptionException?: any;
    /**
     * InvalidApprovalRuleTemplateNameException
     */
    invalidApprovalRuleTemplateNameException?: any;
    /**
     * NumberOfRuleTemplatesExceededException
     */
    numberOfRuleTemplatesExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

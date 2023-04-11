import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAccessControlRuleXAmzTargetEnum {
    WorkMailServiceDeleteAccessControlRule = "WorkMailService.DeleteAccessControlRule"
}
export declare class DeleteAccessControlRuleRequest extends SpeakeasyBase {
    deleteAccessControlRuleRequest: shared.DeleteAccessControlRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccessControlRuleXAmzTargetEnum;
}
export declare class DeleteAccessControlRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAccessControlRuleResponse?: Record<string, any>;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

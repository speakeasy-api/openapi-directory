import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceDeleteMobileDeviceAccessRule = "WorkMailService.DeleteMobileDeviceAccessRule"
}
export declare class DeleteMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    deleteMobileDeviceAccessRuleRequest: shared.DeleteMobileDeviceAccessRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class DeleteMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMobileDeviceAccessRuleResponse?: Record<string, any>;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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

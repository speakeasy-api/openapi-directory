import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceUpdateMobileDeviceAccessRule = "WorkMailService.UpdateMobileDeviceAccessRule"
}
export declare class UpdateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    updateMobileDeviceAccessRuleRequest: shared.UpdateMobileDeviceAccessRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class UpdateMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
    /**
     * Success
     */
    updateMobileDeviceAccessRuleResponse?: Record<string, any>;
}

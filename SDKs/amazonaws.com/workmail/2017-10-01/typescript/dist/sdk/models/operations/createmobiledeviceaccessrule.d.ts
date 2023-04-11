import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceCreateMobileDeviceAccessRule = "WorkMailService.CreateMobileDeviceAccessRule"
}
export declare class CreateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    createMobileDeviceAccessRuleRequest: shared.CreateMobileDeviceAccessRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class CreateMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMobileDeviceAccessRuleResponse?: shared.CreateMobileDeviceAccessRuleResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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

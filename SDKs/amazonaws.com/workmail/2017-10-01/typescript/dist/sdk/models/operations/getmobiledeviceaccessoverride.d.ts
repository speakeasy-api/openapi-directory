import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMobileDeviceAccessOverrideXAmzTargetEnum {
    WorkMailServiceGetMobileDeviceAccessOverride = "WorkMailService.GetMobileDeviceAccessOverride"
}
export declare class GetMobileDeviceAccessOverrideRequest extends SpeakeasyBase {
    getMobileDeviceAccessOverrideRequest: shared.GetMobileDeviceAccessOverrideRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMobileDeviceAccessOverrideXAmzTargetEnum;
}
export declare class GetMobileDeviceAccessOverrideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getMobileDeviceAccessOverrideResponse?: shared.GetMobileDeviceAccessOverrideResponse;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

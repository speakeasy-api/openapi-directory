import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutMobileDeviceAccessOverrideXAmzTargetEnum {
    WorkMailServicePutMobileDeviceAccessOverride = "WorkMailService.PutMobileDeviceAccessOverride"
}
export declare class PutMobileDeviceAccessOverrideRequest extends SpeakeasyBase {
    putMobileDeviceAccessOverrideRequest: shared.PutMobileDeviceAccessOverrideRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMobileDeviceAccessOverrideXAmzTargetEnum;
}
export declare class PutMobileDeviceAccessOverrideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
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
     * Success
     */
    putMobileDeviceAccessOverrideResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

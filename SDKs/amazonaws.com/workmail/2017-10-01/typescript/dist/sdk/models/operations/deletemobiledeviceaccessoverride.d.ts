import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMobileDeviceAccessOverrideXAmzTargetEnum {
    WorkMailServiceDeleteMobileDeviceAccessOverride = "WorkMailService.DeleteMobileDeviceAccessOverride"
}
export declare class DeleteMobileDeviceAccessOverrideRequest extends SpeakeasyBase {
    deleteMobileDeviceAccessOverrideRequest: shared.DeleteMobileDeviceAccessOverrideRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMobileDeviceAccessOverrideXAmzTargetEnum;
}
export declare class DeleteMobileDeviceAccessOverrideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMobileDeviceAccessOverrideResponse?: Record<string, any>;
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
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMobileDeviceAccessEffectXAmzTargetEnum {
    WorkMailServiceGetMobileDeviceAccessEffect = "WorkMailService.GetMobileDeviceAccessEffect"
}
export declare class GetMobileDeviceAccessEffectRequest extends SpeakeasyBase {
    getMobileDeviceAccessEffectRequest: shared.GetMobileDeviceAccessEffectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMobileDeviceAccessEffectXAmzTargetEnum;
}
export declare class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getMobileDeviceAccessEffectResponse?: shared.GetMobileDeviceAccessEffectResponse;
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

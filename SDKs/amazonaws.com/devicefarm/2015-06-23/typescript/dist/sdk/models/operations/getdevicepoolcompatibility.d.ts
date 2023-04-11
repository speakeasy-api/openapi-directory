import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDevicePoolCompatibilityXAmzTargetEnum {
    DeviceFarm20150623GetDevicePoolCompatibility = "DeviceFarm_20150623.GetDevicePoolCompatibility"
}
export declare class GetDevicePoolCompatibilityRequest extends SpeakeasyBase {
    getDevicePoolCompatibilityRequest: shared.GetDevicePoolCompatibilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevicePoolCompatibilityXAmzTargetEnum;
}
export declare class GetDevicePoolCompatibilityResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getDevicePoolCompatibilityResult?: shared.GetDevicePoolCompatibilityResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

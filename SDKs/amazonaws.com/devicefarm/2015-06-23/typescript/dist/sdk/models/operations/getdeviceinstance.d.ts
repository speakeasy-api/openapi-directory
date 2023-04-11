import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeviceInstanceXAmzTargetEnum {
    DeviceFarm20150623GetDeviceInstance = "DeviceFarm_20150623.GetDeviceInstance"
}
export declare class GetDeviceInstanceRequest extends SpeakeasyBase {
    getDeviceInstanceRequest: shared.GetDeviceInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceInstanceXAmzTargetEnum;
}
export declare class GetDeviceInstanceResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getDeviceInstanceResult?: shared.GetDeviceInstanceResult;
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

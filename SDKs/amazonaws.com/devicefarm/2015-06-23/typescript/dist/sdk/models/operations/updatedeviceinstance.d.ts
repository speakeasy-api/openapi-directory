import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDeviceInstanceXAmzTargetEnum {
    DeviceFarm20150623UpdateDeviceInstance = "DeviceFarm_20150623.UpdateDeviceInstance"
}
export declare class UpdateDeviceInstanceRequest extends SpeakeasyBase {
    updateDeviceInstanceRequest: shared.UpdateDeviceInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeviceInstanceXAmzTargetEnum;
}
export declare class UpdateDeviceInstanceResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    /**
     * Success
     */
    updateDeviceInstanceResult?: shared.UpdateDeviceInstanceResult;
}

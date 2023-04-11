import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDevicePoolXAmzTargetEnum {
    DeviceFarm20150623UpdateDevicePool = "DeviceFarm_20150623.UpdateDevicePool"
}
export declare class UpdateDevicePoolRequest extends SpeakeasyBase {
    updateDevicePoolRequest: shared.UpdateDevicePoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevicePoolXAmzTargetEnum;
}
export declare class UpdateDevicePoolResponse extends SpeakeasyBase {
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
    updateDevicePoolResult?: shared.UpdateDevicePoolResult;
}

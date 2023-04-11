import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDevicePoolXAmzTargetEnum {
    DeviceFarm20150623GetDevicePool = "DeviceFarm_20150623.GetDevicePool"
}
export declare class GetDevicePoolRequest extends SpeakeasyBase {
    getDevicePoolRequest: shared.GetDevicePoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevicePoolXAmzTargetEnum;
}
export declare class GetDevicePoolResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getDevicePoolResult?: shared.GetDevicePoolResult;
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

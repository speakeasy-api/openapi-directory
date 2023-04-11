import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDevicePoolXAmzTargetEnum {
    DeviceFarm20150623CreateDevicePool = "DeviceFarm_20150623.CreateDevicePool"
}
export declare class CreateDevicePoolRequest extends SpeakeasyBase {
    createDevicePoolRequest: shared.CreateDevicePoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDevicePoolXAmzTargetEnum;
}
export declare class CreateDevicePoolResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createDevicePoolResult?: shared.CreateDevicePoolResult;
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

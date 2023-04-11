import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeviceInstancesXAmzTargetEnum {
    DeviceFarm20150623ListDeviceInstances = "DeviceFarm_20150623.ListDeviceInstances"
}
export declare class ListDeviceInstancesRequest extends SpeakeasyBase {
    listDeviceInstancesRequest: shared.ListDeviceInstancesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeviceInstancesXAmzTargetEnum;
}
export declare class ListDeviceInstancesResponse extends SpeakeasyBase {
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
     * Success
     */
    listDeviceInstancesResult?: shared.ListDeviceInstancesResult;
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

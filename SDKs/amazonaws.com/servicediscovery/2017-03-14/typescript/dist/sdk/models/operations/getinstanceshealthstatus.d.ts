import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInstancesHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314GetInstancesHealthStatus = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"
}
export declare class GetInstancesHealthStatusRequest extends SpeakeasyBase {
    getInstancesHealthStatusRequest: shared.GetInstancesHealthStatusRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstancesHealthStatusXAmzTargetEnum;
}
export declare class GetInstancesHealthStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInstancesHealthStatusResponse?: shared.GetInstancesHealthStatusResponse;
    /**
     * InstanceNotFound
     */
    instanceNotFound?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
}

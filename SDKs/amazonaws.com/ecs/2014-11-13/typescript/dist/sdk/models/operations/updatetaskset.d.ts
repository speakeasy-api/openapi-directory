import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"
}
export declare class UpdateTaskSetRequest extends SpeakeasyBase {
    updateTaskSetRequest: shared.UpdateTaskSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskSetXAmzTargetEnum;
}
export declare class UpdateTaskSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceNotActiveException
     */
    serviceNotActiveException?: any;
    /**
     * ServiceNotFoundException
     */
    serviceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * TaskSetNotFoundException
     */
    taskSetNotFoundException?: any;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
    /**
     * Success
     */
    updateTaskSetResponse?: shared.UpdateTaskSetResponse;
}

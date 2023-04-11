import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteTaskSet = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet"
}
export declare class DeleteTaskSetRequest extends SpeakeasyBase {
    deleteTaskSetRequest: shared.DeleteTaskSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTaskSetXAmzTargetEnum;
}
export declare class DeleteTaskSetResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteTaskSetResponse?: shared.DeleteTaskSetResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceNotActiveException
     */
    serviceNotActiveException?: any;
    /**
     * ServiceNotFoundException
     */
    serviceNotFoundException?: any;
    /**
     * TaskSetNotFoundException
     */
    taskSetNotFoundException?: any;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
}

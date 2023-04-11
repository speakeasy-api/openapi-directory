import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServicePrimaryTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
}
export declare class UpdateServicePrimaryTaskSetRequest extends SpeakeasyBase {
    updateServicePrimaryTaskSetRequest: shared.UpdateServicePrimaryTaskSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServicePrimaryTaskSetXAmzTargetEnum;
}
export declare class UpdateServicePrimaryTaskSetResponse extends SpeakeasyBase {
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
    updateServicePrimaryTaskSetResponse?: shared.UpdateServicePrimaryTaskSetResponse;
}

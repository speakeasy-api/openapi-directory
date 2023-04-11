import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteClusterXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteCluster = "AmazonEC2ContainerServiceV20141113.DeleteCluster"
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    deleteClusterRequest: shared.DeleteClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClusterXAmzTargetEnum;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterContainsContainerInstancesException
     */
    clusterContainsContainerInstancesException?: any;
    /**
     * ClusterContainsServicesException
     */
    clusterContainsServicesException?: any;
    /**
     * ClusterContainsTasksException
     */
    clusterContainsTasksException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteClusterResponse?: shared.DeleteClusterResponse;
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
     * UpdateInProgressException
     */
    updateInProgressException?: any;
}

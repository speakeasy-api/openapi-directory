import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContainerInstancesStateXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateContainerInstancesState = "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"
}
export declare class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
    updateContainerInstancesStateRequest: shared.UpdateContainerInstancesStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerInstancesStateXAmzTargetEnum;
}
export declare class UpdateContainerInstancesStateResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    updateContainerInstancesStateResponse?: shared.UpdateContainerInstancesStateResponse;
}

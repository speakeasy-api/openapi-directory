import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeregisterContainerInstance = "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance"
}
export declare class DeregisterContainerInstanceRequest extends SpeakeasyBase {
    deregisterContainerInstanceRequest: shared.DeregisterContainerInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterContainerInstanceXAmzTargetEnum;
}
export declare class DeregisterContainerInstanceResponse extends SpeakeasyBase {
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
    deregisterContainerInstanceResponse?: shared.DeregisterContainerInstanceResponse;
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
}

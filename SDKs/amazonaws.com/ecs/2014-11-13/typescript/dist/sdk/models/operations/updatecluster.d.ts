import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateClusterXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateCluster = "AmazonEC2ContainerServiceV20141113.UpdateCluster"
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    updateClusterRequest: shared.UpdateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
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
    updateClusterResponse?: shared.UpdateClusterResponse;
}

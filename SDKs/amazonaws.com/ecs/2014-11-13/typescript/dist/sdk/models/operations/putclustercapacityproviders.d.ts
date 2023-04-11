import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutClusterCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutClusterCapacityProviders = "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"
}
export declare class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
    putClusterCapacityProvidersRequest: shared.PutClusterCapacityProvidersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutClusterCapacityProvidersXAmzTargetEnum;
}
export declare class PutClusterCapacityProvidersResponse extends SpeakeasyBase {
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
     * Success
     */
    putClusterCapacityProvidersResponse?: shared.PutClusterCapacityProvidersResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
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

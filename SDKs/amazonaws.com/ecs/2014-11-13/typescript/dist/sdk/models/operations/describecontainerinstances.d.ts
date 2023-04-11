import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeContainerInstancesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeContainerInstances = "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances"
}
export declare class DescribeContainerInstancesRequest extends SpeakeasyBase {
    describeContainerInstancesRequest: shared.DescribeContainerInstancesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContainerInstancesXAmzTargetEnum;
}
export declare class DescribeContainerInstancesResponse extends SpeakeasyBase {
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
    describeContainerInstancesResponse?: shared.DescribeContainerInstancesResponse;
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

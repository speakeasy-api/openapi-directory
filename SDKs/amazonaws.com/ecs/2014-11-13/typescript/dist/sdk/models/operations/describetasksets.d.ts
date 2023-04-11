import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTaskSetsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTaskSets = "AmazonEC2ContainerServiceV20141113.DescribeTaskSets"
}
export declare class DescribeTaskSetsRequest extends SpeakeasyBase {
    describeTaskSetsRequest: shared.DescribeTaskSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskSetsXAmzTargetEnum;
}
export declare class DescribeTaskSetsResponse extends SpeakeasyBase {
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
    describeTaskSetsResponse?: shared.DescribeTaskSetsResponse;
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
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
}

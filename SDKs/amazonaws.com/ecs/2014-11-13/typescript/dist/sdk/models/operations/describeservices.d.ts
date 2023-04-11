import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServicesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeServices = "AmazonEC2ContainerServiceV20141113.DescribeServices"
}
export declare class DescribeServicesRequest extends SpeakeasyBase {
    describeServicesRequest: shared.DescribeServicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServicesXAmzTargetEnum;
}
export declare class DescribeServicesResponse extends SpeakeasyBase {
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
    describeServicesResponse?: shared.DescribeServicesResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeCapacityProviders = "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
}
export declare class DescribeCapacityProvidersRequest extends SpeakeasyBase {
    describeCapacityProvidersRequest: shared.DescribeCapacityProvidersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCapacityProvidersXAmzTargetEnum;
}
export declare class DescribeCapacityProvidersResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeCapacityProvidersResponse?: shared.DescribeCapacityProvidersResponse;
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

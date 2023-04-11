import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTaskDefinition = "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition"
}
export declare class DescribeTaskDefinitionRequest extends SpeakeasyBase {
    describeTaskDefinitionRequest: shared.DescribeTaskDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskDefinitionXAmzTargetEnum;
}
export declare class DescribeTaskDefinitionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeTaskDefinitionResponse?: shared.DescribeTaskDefinitionResponse;
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

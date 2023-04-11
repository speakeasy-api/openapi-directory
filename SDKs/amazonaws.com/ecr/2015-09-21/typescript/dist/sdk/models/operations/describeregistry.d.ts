import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRegistryXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeRegistry = "AmazonEC2ContainerRegistry_V20150921.DescribeRegistry"
}
export declare class DescribeRegistryRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRegistryXAmzTargetEnum;
}
export declare class DescribeRegistryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRegistryResponse?: shared.DescribeRegistryResponse;
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
     * ValidationException
     */
    validationException?: any;
}

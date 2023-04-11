import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageReplicationStatusXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeImageReplicationStatus = "AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus"
}
export declare class DescribeImageReplicationStatusRequest extends SpeakeasyBase {
    describeImageReplicationStatusRequest: shared.DescribeImageReplicationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageReplicationStatusXAmzTargetEnum;
}
export declare class DescribeImageReplicationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageReplicationStatusResponse?: shared.DescribeImageReplicationStatusResponse;
    /**
     * ImageNotFoundException
     */
    imageNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
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

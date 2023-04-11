import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchGetImage = "AmazonEC2ContainerRegistry_V20150921.BatchGetImage"
}
export declare class BatchGetImageRequest extends SpeakeasyBase {
    batchGetImageRequest: shared.BatchGetImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetImageXAmzTargetEnum;
}
export declare class BatchGetImageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetImageResponse?: shared.BatchGetImageResponse;
    contentType: string;
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
}

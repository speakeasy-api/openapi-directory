import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchDeleteImage = "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage"
}
export declare class BatchDeleteImageRequest extends SpeakeasyBase {
    batchDeleteImageRequest: shared.BatchDeleteImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteImageXAmzTargetEnum;
}
export declare class BatchDeleteImageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteImageResponse?: shared.BatchDeleteImageResponse;
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

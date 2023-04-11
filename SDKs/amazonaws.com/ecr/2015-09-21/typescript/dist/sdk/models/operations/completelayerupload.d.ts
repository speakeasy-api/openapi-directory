import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CompleteLayerUploadXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CompleteLayerUpload = "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload"
}
export declare class CompleteLayerUploadRequest extends SpeakeasyBase {
    completeLayerUploadRequest: shared.CompleteLayerUploadRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CompleteLayerUploadXAmzTargetEnum;
}
export declare class CompleteLayerUploadResponse extends SpeakeasyBase {
    /**
     * Success
     */
    completeLayerUploadResponse?: shared.CompleteLayerUploadResponse;
    contentType: string;
    /**
     * EmptyUploadException
     */
    emptyUploadException?: any;
    /**
     * InvalidLayerException
     */
    invalidLayerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
    /**
     * LayerAlreadyExistsException
     */
    layerAlreadyExistsException?: any;
    /**
     * LayerPartTooSmallException
     */
    layerPartTooSmallException?: any;
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
     * UploadNotFoundException
     */
    uploadNotFoundException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InitiateLayerUploadXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921InitiateLayerUpload = "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload"
}
export declare class InitiateLayerUploadRequest extends SpeakeasyBase {
    initiateLayerUploadRequest: shared.InitiateLayerUploadRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InitiateLayerUploadXAmzTargetEnum;
}
export declare class InitiateLayerUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    initiateLayerUploadResponse?: shared.InitiateLayerUploadResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDownloadUrlForLayerXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetDownloadUrlForLayer = "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer"
}
export declare class GetDownloadUrlForLayerRequest extends SpeakeasyBase {
    getDownloadUrlForLayerRequest: shared.GetDownloadUrlForLayerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDownloadUrlForLayerXAmzTargetEnum;
}
export declare class GetDownloadUrlForLayerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDownloadUrlForLayerResponse?: shared.GetDownloadUrlForLayerResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LayerInaccessibleException
     */
    layerInaccessibleException?: any;
    /**
     * LayersNotFoundException
     */
    layersNotFoundException?: any;
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

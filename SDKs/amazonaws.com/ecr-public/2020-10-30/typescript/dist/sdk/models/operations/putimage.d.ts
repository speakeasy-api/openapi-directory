import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutImageXAmzTargetEnum {
    SpencerFrontendServicePutImage = "SpencerFrontendService.PutImage"
}
export declare class PutImageRequest extends SpeakeasyBase {
    putImageRequest: shared.PutImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageXAmzTargetEnum;
}
export declare class PutImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ImageAlreadyExistsException
     */
    imageAlreadyExistsException?: any;
    /**
     * ImageDigestDoesNotMatchException
     */
    imageDigestDoesNotMatchException?: any;
    /**
     * ImageTagAlreadyExistsException
     */
    imageTagAlreadyExistsException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LayersNotFoundException
     */
    layersNotFoundException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putImageResponse?: shared.PutImageResponse;
    /**
     * ReferencedImagesNotFoundException
     */
    referencedImagesNotFoundException?: any;
    /**
     * RegistryNotFoundException
     */
    registryNotFoundException?: any;
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
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}

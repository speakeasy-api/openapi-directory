import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UploadLayerPartXAmzTargetEnum {
    SpencerFrontendServiceUploadLayerPart = "SpencerFrontendService.UploadLayerPart"
}
export declare class UploadLayerPartRequest extends SpeakeasyBase {
    uploadLayerPartRequest: shared.UploadLayerPartRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UploadLayerPartXAmzTargetEnum;
}
export declare class UploadLayerPartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidLayerPartException
     */
    invalidLayerPartException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RegistryNotFoundException
     */
    registryNotFoundException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
    /**
     * Success
     */
    uploadLayerPartResponse?: shared.UploadLayerPartResponse;
    /**
     * UploadNotFoundException
     */
    uploadNotFoundException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InitiateLayerUploadXAmzTargetEnum {
    SpencerFrontendServiceInitiateLayerUpload = "SpencerFrontendService.InitiateLayerUpload"
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

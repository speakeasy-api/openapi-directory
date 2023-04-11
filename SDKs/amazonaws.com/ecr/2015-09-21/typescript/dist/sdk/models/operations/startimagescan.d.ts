import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartImageScanXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921StartImageScan = "AmazonEC2ContainerRegistry_V20150921.StartImageScan"
}
export declare class StartImageScanRequest extends SpeakeasyBase {
    startImageScanRequest: shared.StartImageScanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImageScanXAmzTargetEnum;
}
export declare class StartImageScanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ImageNotFoundException
     */
    imageNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    startImageScanResponse?: shared.StartImageScanResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedImageTypeException
     */
    unsupportedImageTypeException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

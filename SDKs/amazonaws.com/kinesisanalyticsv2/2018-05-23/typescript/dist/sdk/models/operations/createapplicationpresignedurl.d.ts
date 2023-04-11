import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationPresignedUrlXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationPresignedUrl = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"
}
export declare class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
    createApplicationPresignedUrlRequest: shared.CreateApplicationPresignedUrlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationPresignedUrlXAmzTargetEnum;
}
export declare class CreateApplicationPresignedUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createApplicationPresignedUrlResponse?: shared.CreateApplicationPresignedUrlResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

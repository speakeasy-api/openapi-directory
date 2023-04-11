import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationCloudWatchLoggingOption = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"
}
export declare class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    addApplicationCloudWatchLoggingOptionRequest: shared.AddApplicationCloudWatchLoggingOptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}
export declare class AddApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationCloudWatchLoggingOptionResponse?: shared.AddApplicationCloudWatchLoggingOptionResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidApplicationConfigurationException
     */
    invalidApplicationConfigurationException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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

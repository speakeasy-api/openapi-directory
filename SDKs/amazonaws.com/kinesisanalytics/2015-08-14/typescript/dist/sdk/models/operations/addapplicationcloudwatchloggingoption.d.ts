import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption"
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
    addApplicationCloudWatchLoggingOptionResponse?: Record<string, any>;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
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
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

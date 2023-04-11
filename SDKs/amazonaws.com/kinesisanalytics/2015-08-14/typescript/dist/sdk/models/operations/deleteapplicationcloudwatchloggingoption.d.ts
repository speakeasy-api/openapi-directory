import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption"
}
export declare class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    deleteApplicationCloudWatchLoggingOptionRequest: shared.DeleteApplicationCloudWatchLoggingOptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}
export declare class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationCloudWatchLoggingOptionResponse?: Record<string, any>;
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

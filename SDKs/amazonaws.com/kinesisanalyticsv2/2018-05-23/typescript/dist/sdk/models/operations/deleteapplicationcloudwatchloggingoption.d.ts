import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption = "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption"
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
    deleteApplicationCloudWatchLoggingOptionResponse?: shared.DeleteApplicationCloudWatchLoggingOptionResponse;
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

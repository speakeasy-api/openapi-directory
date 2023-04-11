import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration"
}
export declare class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
    addApplicationInputProcessingConfigurationRequest: shared.AddApplicationInputProcessingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationInputProcessingConfigurationXAmzTargetEnum;
}
export declare class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationInputProcessingConfigurationResponse?: Record<string, any>;
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

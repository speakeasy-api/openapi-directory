import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration"
}
export declare class DeleteApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
    deleteApplicationInputProcessingConfigurationRequest: shared.DeleteApplicationInputProcessingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationInputProcessingConfigurationXAmzTargetEnum;
}
export declare class DeleteApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationInputProcessingConfigurationResponse?: Record<string, any>;
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

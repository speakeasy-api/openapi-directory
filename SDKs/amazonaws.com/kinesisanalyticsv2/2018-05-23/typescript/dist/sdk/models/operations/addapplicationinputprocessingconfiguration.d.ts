import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration"
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
    addApplicationInputProcessingConfigurationResponse?: shared.AddApplicationInputProcessingConfigurationResponse;
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

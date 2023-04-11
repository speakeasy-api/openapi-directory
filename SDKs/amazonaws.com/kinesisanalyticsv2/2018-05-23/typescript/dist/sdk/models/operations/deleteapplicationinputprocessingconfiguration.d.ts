import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration = "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration"
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
    deleteApplicationInputProcessingConfigurationResponse?: shared.DeleteApplicationInputProcessingConfigurationResponse;
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

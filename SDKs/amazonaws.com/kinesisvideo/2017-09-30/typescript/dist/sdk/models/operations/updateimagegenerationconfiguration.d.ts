import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.
 */
export declare class UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration extends SpeakeasyBase {
    destinationConfig?: shared.ImageGenerationDestinationConfig;
    format?: shared.FormatEnum;
    formatConfig?: Record<string, string>;
    heightPixels?: number;
    imageSelectorType?: shared.ImageSelectorTypeEnum;
    samplingInterval?: number;
    status?: shared.ConfigurationStatusEnum;
    widthPixels?: number;
}
export declare class UpdateImageGenerationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.
     */
    imageGenerationConfiguration?: UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamARN?: string;
    /**
     * The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamName?: string;
}
export declare class UpdateImageGenerationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateImageGenerationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateImageGenerationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NoDataRetentionException
     */
    noDataRetentionException?: any;
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
     * Success
     */
    updateImageGenerationConfigurationOutput?: Record<string, any>;
}

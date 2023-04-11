import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that encapsulates, or contains, the media storage configuration properties.
 */
export declare class UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration extends SpeakeasyBase {
    status?: shared.MediaStorageConfigurationStatusEnum;
    streamARN?: string;
}
export declare class UpdateMediaStorageConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the channel.
     */
    channelARN: string;
    /**
     * A structure that encapsulates, or contains, the media storage configuration properties.
     */
    mediaStorageConfiguration: UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration;
}
export declare class UpdateMediaStorageConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateMediaStorageConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMediaStorageConfigurationResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * Success
     */
    updateMediaStorageConfigurationOutput?: Record<string, any>;
}

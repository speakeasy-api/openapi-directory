import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
 */
export declare class StartEdgeConfigurationUpdateRequestBodyEdgeConfig extends SpeakeasyBase {
    deletionConfig?: shared.DeletionConfig;
    hubDeviceArn?: string;
    recorderConfig?: shared.RecorderConfig;
    uploaderConfig?: shared.UploaderConfig;
}
export declare class StartEdgeConfigurationUpdateRequestBody extends SpeakeasyBase {
    /**
     * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
     */
    edgeConfig: StartEdgeConfigurationUpdateRequestBodyEdgeConfig;
    /**
     *  The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamARN?: string;
    /**
     * The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamName?: string;
}
export declare class StartEdgeConfigurationUpdateRequest extends SpeakeasyBase {
    requestBody: StartEdgeConfigurationUpdateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartEdgeConfigurationUpdateResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startEdgeConfigurationUpdateOutput?: shared.StartEdgeConfigurationUpdateOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

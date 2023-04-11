import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
 */
export declare class UpdateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
    messageTtlSeconds?: number;
}
export declare class UpdateSignalingChannelRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
     */
    channelARN: string;
    /**
     * The current version of the signaling channel that you want to update.
     */
    currentVersion: string;
    /**
     * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
     */
    singleMasterConfiguration?: UpdateSignalingChannelRequestBodySingleMasterConfiguration;
}
export declare class UpdateSignalingChannelRequest extends SpeakeasyBase {
    requestBody: UpdateSignalingChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSignalingChannelResponse extends SpeakeasyBase {
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
    updateSignalingChannelOutput?: Record<string, any>;
    /**
     * VersionMismatchException
     */
    versionMismatchException?: any;
}

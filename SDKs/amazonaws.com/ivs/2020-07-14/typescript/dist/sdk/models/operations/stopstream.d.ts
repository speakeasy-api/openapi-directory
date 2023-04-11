import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopStreamRequestBody extends SpeakeasyBase {
    /**
     * ARN of the channel for which the stream is to be stopped.
     */
    channelArn: string;
}
export declare class StopStreamRequest extends SpeakeasyBase {
    requestBody: StopStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopStreamResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ChannelNotBroadcasting
     */
    channelNotBroadcasting?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopStreamResponse?: Record<string, any>;
    /**
     * StreamUnavailable
     */
    streamUnavailable?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

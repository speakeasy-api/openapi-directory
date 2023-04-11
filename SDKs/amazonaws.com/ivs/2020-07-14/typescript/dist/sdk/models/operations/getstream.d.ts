import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStreamRequestBody extends SpeakeasyBase {
    /**
     * Channel ARN for stream to be accessed.
     */
    channelArn: string;
}
export declare class GetStreamRequest extends SpeakeasyBase {
    requestBody: GetStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ChannelNotBroadcasting
     */
    channelNotBroadcasting?: any;
    contentType: string;
    /**
     * Success
     */
    getStreamResponse?: shared.GetStreamResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

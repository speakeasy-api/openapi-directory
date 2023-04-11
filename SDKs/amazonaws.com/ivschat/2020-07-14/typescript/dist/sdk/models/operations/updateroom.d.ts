import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration information for optional message review.
 */
export declare class UpdateRoomRequestBodyMessageReviewHandler extends SpeakeasyBase {
    fallbackResult?: shared.FallbackResultEnum;
    uri?: string;
}
export declare class UpdateRoomRequestBody extends SpeakeasyBase {
    /**
     * Identifier of the room to be updated. Currently this must be an ARN.
     */
    identifier: string;
    /**
     * Array of logging-configuration identifiers attached to the room.
     */
    loggingConfigurationIdentifiers?: string[];
    /**
     * The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
     */
    maximumMessageLength?: number;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
     */
    maximumMessageRatePerSecond?: number;
    /**
     * Configuration information for optional message review.
     */
    messageReviewHandler?: UpdateRoomRequestBodyMessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: string;
}
export declare class UpdateRoomRequest extends SpeakeasyBase {
    requestBody: UpdateRoomRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRoomResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateRoomResponse?: shared.UpdateRoomResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

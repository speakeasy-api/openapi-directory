import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration information for optional message review.
 */
export declare class CreateRoomRequestBodyMessageReviewHandler extends SpeakeasyBase {
    fallbackResult?: shared.FallbackResultEnum;
    uri?: string;
}
export declare class CreateRoomRequestBody extends SpeakeasyBase {
    /**
     * Array of logging-configuration identifiers attached to the room.
     */
    loggingConfigurationIdentifiers?: string[];
    /**
     * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
     */
    maximumMessageLength?: number;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
     */
    maximumMessageRatePerSecond?: number;
    /**
     * Configuration information for optional message review.
     */
    messageReviewHandler?: CreateRoomRequestBodyMessageReviewHandler;
    /**
     * Room name. The value does not need to be unique.
     */
    name?: string;
    /**
     * Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
     */
    tags?: Record<string, string>;
}
export declare class CreateRoomRequest extends SpeakeasyBase {
    requestBody: CreateRoomRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRoomResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createRoomResponse?: shared.CreateRoomResponse;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

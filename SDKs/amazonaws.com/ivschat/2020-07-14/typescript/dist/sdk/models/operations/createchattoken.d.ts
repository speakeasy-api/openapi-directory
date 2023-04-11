import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateChatTokenRequestBody extends SpeakeasyBase {
    /**
     * Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
     */
    attributes?: Record<string, string>;
    /**
     * Set of capabilities that the user is allowed to perform in the room. Default: None (the capability to view messages is implicitly included in all requests).
     */
    capabilities?: shared.ChatTokenCapabilityEnum[];
    /**
     * Identifier of the room that the client is trying to access. Currently this must be an ARN.
     */
    roomIdentifier: string;
    /**
     * Session duration (in minutes), after which the session expires. Default: 60 (1 hour).
     */
    sessionDurationInMinutes?: number;
    /**
     * Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text.
     */
    userId: string;
}
export declare class CreateChatTokenRequest extends SpeakeasyBase {
    requestBody: CreateChatTokenRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateChatTokenResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createChatTokenResponse?: shared.CreateChatTokenResponse;
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
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
 */
export declare class SendUsersMessagesRequestBodySendUsersMessageRequest extends SpeakeasyBase {
    context?: Record<string, string>;
    messageConfiguration?: shared.DirectMessageConfiguration;
    templateConfiguration?: shared.TemplateConfiguration;
    traceId?: string;
    users?: Record<string, shared.EndpointSendConfiguration>;
}
export declare class SendUsersMessagesRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
     */
    sendUsersMessageRequest: SendUsersMessagesRequestBodySendUsersMessageRequest;
}
export declare class SendUsersMessagesRequest extends SpeakeasyBase {
    requestBody: SendUsersMessagesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
     */
    applicationId: string;
}
export declare class SendUsersMessagesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    /**
     * Success
     */
    sendUsersMessagesResponse?: shared.SendUsersMessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

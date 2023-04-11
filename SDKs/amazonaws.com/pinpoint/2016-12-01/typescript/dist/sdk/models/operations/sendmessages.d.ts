import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration and other settings for a message.
 */
export declare class SendMessagesRequestBodyMessageRequest extends SpeakeasyBase {
    addresses?: Record<string, shared.AddressConfiguration>;
    context?: Record<string, string>;
    endpoints?: Record<string, shared.EndpointSendConfiguration>;
    messageConfiguration?: shared.DirectMessageConfiguration;
    templateConfiguration?: shared.TemplateConfiguration;
    traceId?: string;
}
export declare class SendMessagesRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration and other settings for a message.
     */
    messageRequest: SendMessagesRequestBodyMessageRequest;
}
export declare class SendMessagesRequest extends SpeakeasyBase {
    requestBody: SendMessagesRequestBody;
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
export declare class SendMessagesResponse extends SpeakeasyBase {
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
    sendMessagesResponse?: shared.SendMessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

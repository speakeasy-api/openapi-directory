import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the status and settings of the email channel for an application.
 */
export declare class UpdateEmailChannelRequestBodyEmailChannelRequest extends SpeakeasyBase {
    configurationSet?: string;
    enabled?: boolean;
    fromAddress?: string;
    identity?: string;
    roleArn?: string;
}
export declare class UpdateEmailChannelRequestBody extends SpeakeasyBase {
    /**
     * Specifies the status and settings of the email channel for an application.
     */
    emailChannelRequest: UpdateEmailChannelRequestBodyEmailChannelRequest;
}
export declare class UpdateEmailChannelRequest extends SpeakeasyBase {
    requestBody: UpdateEmailChannelRequestBody;
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
export declare class UpdateEmailChannelResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateEmailChannelResponse?: shared.UpdateEmailChannelResponse;
}

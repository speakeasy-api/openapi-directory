import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
 */
export declare class PutEventStreamRequestBodyWriteEventStream extends SpeakeasyBase {
    destinationStreamArn?: string;
    roleArn?: string;
}
export declare class PutEventStreamRequestBody extends SpeakeasyBase {
    /**
     * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
     */
    writeEventStream: PutEventStreamRequestBodyWriteEventStream;
}
export declare class PutEventStreamRequest extends SpeakeasyBase {
    requestBody: PutEventStreamRequestBody;
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
export declare class PutEventStreamResponse extends SpeakeasyBase {
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
    putEventStreamResponse?: shared.PutEventStreamResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the display name of an application and the tags to associate with the application.
 */
export declare class CreateAppRequestBodyCreateApplicationRequest extends SpeakeasyBase {
    name?: string;
    tags?: Record<string, string>;
}
export declare class CreateAppRequestBody extends SpeakeasyBase {
    /**
     * Specifies the display name of an application and the tags to associate with the application.
     */
    createApplicationRequest: CreateAppRequestBodyCreateApplicationRequest;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    requestBody: CreateAppRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createAppResponse?: shared.CreateAppResponse;
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
}

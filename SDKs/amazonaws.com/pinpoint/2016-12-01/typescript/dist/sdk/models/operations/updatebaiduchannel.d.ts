import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
 */
export declare class UpdateBaiduChannelRequestBodyBaiduChannelRequest extends SpeakeasyBase {
    apiKey?: string;
    enabled?: boolean;
    secretKey?: string;
}
export declare class UpdateBaiduChannelRequestBody extends SpeakeasyBase {
    /**
     * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
     */
    baiduChannelRequest: UpdateBaiduChannelRequestBodyBaiduChannelRequest;
}
export declare class UpdateBaiduChannelRequest extends SpeakeasyBase {
    requestBody: UpdateBaiduChannelRequestBody;
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
export declare class UpdateBaiduChannelResponse extends SpeakeasyBase {
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
    updateBaiduChannelResponse?: shared.UpdateBaiduChannelResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the channel type and other settings for an endpoint.
 */
export declare class UpdateEndpointRequestBodyEndpointRequest extends SpeakeasyBase {
    address?: string;
    attributes?: Record<string, string[]>;
    channelType?: shared.ChannelTypeEnum;
    demographic?: shared.EndpointDemographic;
    effectiveDate?: string;
    endpointStatus?: string;
    location?: shared.EndpointLocation;
    metrics?: Record<string, number>;
    optOut?: string;
    requestId?: string;
    user?: shared.EndpointUser;
}
export declare class UpdateEndpointRequestBody extends SpeakeasyBase {
    /**
     * Specifies the channel type and other settings for an endpoint.
     */
    endpointRequest: UpdateEndpointRequestBodyEndpointRequest;
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    requestBody: UpdateEndpointRequestBody;
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
    /**
     * The unique identifier for the endpoint.
     */
    endpointId: string;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
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
    updateEndpointResponse?: shared.UpdateEndpointResponse;
}

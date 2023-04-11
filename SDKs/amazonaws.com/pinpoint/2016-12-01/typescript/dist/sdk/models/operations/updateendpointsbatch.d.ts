import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
 */
export declare class UpdateEndpointsBatchRequestBodyEndpointBatchRequest extends SpeakeasyBase {
    item?: shared.EndpointBatchItem[];
}
export declare class UpdateEndpointsBatchRequestBody extends SpeakeasyBase {
    /**
     * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
     */
    endpointBatchRequest: UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
}
export declare class UpdateEndpointsBatchRequest extends SpeakeasyBase {
    requestBody: UpdateEndpointsBatchRequestBody;
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
export declare class UpdateEndpointsBatchResponse extends SpeakeasyBase {
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
    updateEndpointsBatchResponse?: shared.UpdateEndpointsBatchResponse;
}

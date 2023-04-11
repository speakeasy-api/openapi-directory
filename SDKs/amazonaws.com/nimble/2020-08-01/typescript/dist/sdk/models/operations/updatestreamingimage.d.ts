import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStreamingImageRequestBody extends SpeakeasyBase {
    /**
     * The description.
     */
    description?: string;
    /**
     * A friendly name for a streaming image resource.
     */
    name?: string;
}
export declare class UpdateStreamingImageRequest extends SpeakeasyBase {
    requestBody: UpdateStreamingImageRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The streaming image ID.
     */
    streamingImageId: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class UpdateStreamingImageResponse extends SpeakeasyBase {
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
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateStreamingImageResponse?: shared.UpdateStreamingImageResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

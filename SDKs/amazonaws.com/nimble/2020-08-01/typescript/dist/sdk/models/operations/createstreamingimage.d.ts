import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStreamingImageRequestBody extends SpeakeasyBase {
    /**
     * The description.
     */
    description?: string;
    /**
     * The ID of an EC2 machine image with which to create this streaming image.
     */
    ec2ImageId: string;
    /**
     * A friendly name for a streaming image resource.
     */
    name: string;
    /**
     * A collection of labels, in the form of key-value pairs, that apply to this resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateStreamingImageRequest extends SpeakeasyBase {
    requestBody: CreateStreamingImageRequestBody;
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
     * The studio ID.
     */
    studioId: string;
}
export declare class CreateStreamingImageResponse extends SpeakeasyBase {
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
     * Success
     */
    createStreamingImageResponse?: shared.CreateStreamingImageResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

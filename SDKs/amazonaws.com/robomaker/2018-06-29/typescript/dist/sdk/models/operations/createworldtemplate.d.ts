import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a template location.
 */
export declare class CreateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
export declare class CreateWorldTemplateRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * The name of the world template.
     */
    name?: string;
    /**
     * A map that contains tag keys and tag values that are attached to the world template.
     */
    tags?: Record<string, string>;
    /**
     * The world template body.
     */
    templateBody?: string;
    /**
     * Information about a template location.
     */
    templateLocation?: CreateWorldTemplateRequestBodyTemplateLocation;
}
export declare class CreateWorldTemplateRequest extends SpeakeasyBase {
    requestBody: CreateWorldTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorldTemplateResponse?: shared.CreateWorldTemplateResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

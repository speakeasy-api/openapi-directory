import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
 */
export declare class CreateAllowListRequestBodyCriteria extends SpeakeasyBase {
    regex?: string;
    s3WordsList?: shared.S3WordsList;
}
export declare class CreateAllowListRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken: string;
    /**
     * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
     */
    criteria: CreateAllowListRequestBodyCriteria;
    /**
     * A custom description of the allow list. The description can contain as many as 512 characters.
     */
    description?: string;
    /**
     * A custom name for the allow list. The name can contain as many as 128 characters.
     */
    name: string;
    /**
     * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateAllowListRequest extends SpeakeasyBase {
    requestBody: CreateAllowListRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAllowListResponse extends SpeakeasyBase {
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
    createAllowListResponse?: shared.CreateAllowListResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.
 */
export declare class UpdateClassificationScopeRequestBodyS3 extends SpeakeasyBase {
    excludes?: shared.S3ClassificationScopeExclusionUpdate;
}
export declare class UpdateClassificationScopeRequestBody extends SpeakeasyBase {
    /**
     * Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.
     */
    s3?: UpdateClassificationScopeRequestBodyS3;
}
export declare class UpdateClassificationScopeRequest extends SpeakeasyBase {
    requestBody: UpdateClassificationScopeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the Amazon Macie resource that the request applies to.
     */
    id: string;
}
export declare class UpdateClassificationScopeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateClassificationScopeResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

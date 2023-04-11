import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UntagResourceRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
     */
    resourceArn: string;
    /**
     * Keys of the tag that need to be removed from the resource.
     */
    tagKeys: string[];
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    requestBody: UntagResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidTaggingRequestException
     */
    invalidTaggingRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagResourceResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

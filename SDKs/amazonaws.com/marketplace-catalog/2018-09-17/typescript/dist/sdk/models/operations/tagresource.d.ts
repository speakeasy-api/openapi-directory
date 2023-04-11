import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.
     */
    resourceArn: string;
    /**
     * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
     */
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    requestBody: TagResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    tagResourceResponse?: Record<string, any>;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcePoliciesRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of resource policies to display for each page of results.
     */
    maxResults?: number;
    /**
     * The pagination token to continue to the next page of results.
     */
    nextToken?: string;
}
export declare class GetResourcePoliciesRequest extends SpeakeasyBase {
    requestBody: GetResourcePoliciesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the response plan with the attached resource policy.
     */
    resourceArn: string;
}
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResourcePoliciesOutput?: shared.GetResourcePoliciesOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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

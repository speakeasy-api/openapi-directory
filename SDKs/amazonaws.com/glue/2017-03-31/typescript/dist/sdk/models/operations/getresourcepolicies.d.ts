import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourcePoliciesXAmzTargetEnum {
    AWSGlueGetResourcePolicies = "AWSGlue.GetResourcePolicies"
}
export declare class GetResourcePoliciesRequest extends SpeakeasyBase {
    getResourcePoliciesRequest: shared.GetResourcePoliciesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePoliciesXAmzTargetEnum;
}
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourcePoliciesResponse?: shared.GetResourcePoliciesResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

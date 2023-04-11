import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSecurityPoliciesXAmzTargetEnum {
    OpenSearchServerlessListSecurityPolicies = "OpenSearchServerless.ListSecurityPolicies"
}
export declare class ListSecurityPoliciesRequest extends SpeakeasyBase {
    listSecurityPoliciesRequest: shared.ListSecurityPoliciesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecurityPoliciesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSecurityPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSecurityPoliciesResponse?: shared.ListSecurityPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

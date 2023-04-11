import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListKeyPoliciesXAmzTargetEnum {
    TrentServiceListKeyPolicies = "TrentService.ListKeyPolicies"
}
export declare class ListKeyPoliciesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listKeyPoliciesRequest: shared.ListKeyPoliciesRequest;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListKeyPoliciesXAmzTargetEnum;
}
export declare class ListKeyPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * Success
     */
    listKeyPoliciesResponse?: shared.ListKeyPoliciesResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFirewallPoliciesXAmzTargetEnum {
    NetworkFirewall20201112ListFirewallPolicies = "NetworkFirewall_20201112.ListFirewallPolicies"
}
export declare class ListFirewallPoliciesRequest extends SpeakeasyBase {
    listFirewallPoliciesRequest: shared.ListFirewallPoliciesRequest;
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
    xAmzTarget: ListFirewallPoliciesXAmzTargetEnum;
}
export declare class ListFirewallPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listFirewallPoliciesResponse?: shared.ListFirewallPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

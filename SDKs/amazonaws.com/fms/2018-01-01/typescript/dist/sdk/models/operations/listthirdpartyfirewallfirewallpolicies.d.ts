import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum {
    AWSFMS20180101ListThirdPartyFirewallFirewallPolicies = "AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies"
}
export declare class ListThirdPartyFirewallFirewallPoliciesRequest extends SpeakeasyBase {
    listThirdPartyFirewallFirewallPoliciesRequest: shared.ListThirdPartyFirewallFirewallPoliciesRequest;
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
    xAmzTarget: ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum;
}
export declare class ListThirdPartyFirewallFirewallPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * Success
     */
    listThirdPartyFirewallFirewallPoliciesResponse?: shared.ListThirdPartyFirewallFirewallPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

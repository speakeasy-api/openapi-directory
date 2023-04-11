import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLoadBalancerTlsPoliciesXAmzTargetEnum {
    Lightsail20161128GetLoadBalancerTlsPolicies = "Lightsail_20161128.GetLoadBalancerTlsPolicies"
}
export declare class GetLoadBalancerTlsPoliciesRequest extends SpeakeasyBase {
    getLoadBalancerTlsPoliciesRequest: shared.GetLoadBalancerTlsPoliciesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerTlsPoliciesXAmzTargetEnum;
}
export declare class GetLoadBalancerTlsPoliciesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * Success
     */
    getLoadBalancerTlsPoliciesResult?: shared.GetLoadBalancerTlsPoliciesResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}

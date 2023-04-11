import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLoadBalancerAttributeXAmzTargetEnum {
    Lightsail20161128UpdateLoadBalancerAttribute = "Lightsail_20161128.UpdateLoadBalancerAttribute"
}
export declare class UpdateLoadBalancerAttributeRequest extends SpeakeasyBase {
    updateLoadBalancerAttributeRequest: shared.UpdateLoadBalancerAttributeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLoadBalancerAttributeXAmzTargetEnum;
}
export declare class UpdateLoadBalancerAttributeResponse extends SpeakeasyBase {
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
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
    /**
     * Success
     */
    updateLoadBalancerAttributeResult?: shared.UpdateLoadBalancerAttributeResult;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetachInstancesFromLoadBalancerXAmzTargetEnum {
    Lightsail20161128DetachInstancesFromLoadBalancer = "Lightsail_20161128.DetachInstancesFromLoadBalancer"
}
export declare class DetachInstancesFromLoadBalancerRequest extends SpeakeasyBase {
    detachInstancesFromLoadBalancerRequest: shared.DetachInstancesFromLoadBalancerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachInstancesFromLoadBalancerXAmzTargetEnum;
}
export declare class DetachInstancesFromLoadBalancerResponse extends SpeakeasyBase {
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
    detachInstancesFromLoadBalancerResult?: shared.DetachInstancesFromLoadBalancerResult;
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

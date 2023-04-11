import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLoadBalancerMetricDataXAmzTargetEnum {
    Lightsail20161128GetLoadBalancerMetricData = "Lightsail_20161128.GetLoadBalancerMetricData"
}
export declare class GetLoadBalancerMetricDataRequest extends SpeakeasyBase {
    getLoadBalancerMetricDataRequest: shared.GetLoadBalancerMetricDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerMetricDataXAmzTargetEnum;
}
export declare class GetLoadBalancerMetricDataResponse extends SpeakeasyBase {
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
    getLoadBalancerMetricDataResult?: shared.GetLoadBalancerMetricDataResult;
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

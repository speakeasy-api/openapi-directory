import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachInstancesToLoadBalancerXAmzTargetEnum {
    Lightsail20161128AttachInstancesToLoadBalancer = "Lightsail_20161128.AttachInstancesToLoadBalancer"
}
export declare class AttachInstancesToLoadBalancerRequest extends SpeakeasyBase {
    attachInstancesToLoadBalancerRequest: shared.AttachInstancesToLoadBalancerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachInstancesToLoadBalancerXAmzTargetEnum;
}
export declare class AttachInstancesToLoadBalancerResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    /**
     * Success
     */
    attachInstancesToLoadBalancerResult?: shared.AttachInstancesToLoadBalancerResult;
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

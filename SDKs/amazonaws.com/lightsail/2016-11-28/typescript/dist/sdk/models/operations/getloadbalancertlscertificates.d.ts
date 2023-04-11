import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLoadBalancerTlsCertificatesXAmzTargetEnum {
    Lightsail20161128GetLoadBalancerTlsCertificates = "Lightsail_20161128.GetLoadBalancerTlsCertificates"
}
export declare class GetLoadBalancerTlsCertificatesRequest extends SpeakeasyBase {
    getLoadBalancerTlsCertificatesRequest: shared.GetLoadBalancerTlsCertificatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerTlsCertificatesXAmzTargetEnum;
}
export declare class GetLoadBalancerTlsCertificatesResponse extends SpeakeasyBase {
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
    getLoadBalancerTlsCertificatesResult?: shared.GetLoadBalancerTlsCertificatesResult;
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

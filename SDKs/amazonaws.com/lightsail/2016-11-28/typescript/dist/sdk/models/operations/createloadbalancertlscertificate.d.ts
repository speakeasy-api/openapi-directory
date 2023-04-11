import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128CreateLoadBalancerTlsCertificate = "Lightsail_20161128.CreateLoadBalancerTlsCertificate"
}
export declare class CreateLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    createLoadBalancerTlsCertificateRequest: shared.CreateLoadBalancerTlsCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class CreateLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
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
    createLoadBalancerTlsCertificateResult?: shared.CreateLoadBalancerTlsCertificateResult;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128AttachLoadBalancerTlsCertificate = "Lightsail_20161128.AttachLoadBalancerTlsCertificate"
}
export declare class AttachLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    attachLoadBalancerTlsCertificateRequest: shared.AttachLoadBalancerTlsCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class AttachLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
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
    attachLoadBalancerTlsCertificateResult?: shared.AttachLoadBalancerTlsCertificateResult;
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

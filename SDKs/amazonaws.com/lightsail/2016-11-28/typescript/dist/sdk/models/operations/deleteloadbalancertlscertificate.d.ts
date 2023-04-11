import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128DeleteLoadBalancerTlsCertificate = "Lightsail_20161128.DeleteLoadBalancerTlsCertificate"
}
export declare class DeleteLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    deleteLoadBalancerTlsCertificateRequest: shared.DeleteLoadBalancerTlsCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class DeleteLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
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
    deleteLoadBalancerTlsCertificateResult?: shared.DeleteLoadBalancerTlsCertificateResult;
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

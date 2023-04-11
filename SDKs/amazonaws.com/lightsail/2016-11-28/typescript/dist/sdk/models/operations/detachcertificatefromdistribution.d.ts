import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetachCertificateFromDistributionXAmzTargetEnum {
    Lightsail20161128DetachCertificateFromDistribution = "Lightsail_20161128.DetachCertificateFromDistribution"
}
export declare class DetachCertificateFromDistributionRequest extends SpeakeasyBase {
    detachCertificateFromDistributionRequest: shared.DetachCertificateFromDistributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachCertificateFromDistributionXAmzTargetEnum;
}
export declare class DetachCertificateFromDistributionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    detachCertificateFromDistributionResult?: shared.DetachCertificateFromDistributionResult;
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

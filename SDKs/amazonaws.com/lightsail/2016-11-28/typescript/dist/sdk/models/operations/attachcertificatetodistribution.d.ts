import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachCertificateToDistributionXAmzTargetEnum {
    Lightsail20161128AttachCertificateToDistribution = "Lightsail_20161128.AttachCertificateToDistribution"
}
export declare class AttachCertificateToDistributionRequest extends SpeakeasyBase {
    attachCertificateToDistributionRequest: shared.AttachCertificateToDistributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachCertificateToDistributionXAmzTargetEnum;
}
export declare class AttachCertificateToDistributionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    attachCertificateToDistributionResult?: shared.AttachCertificateToDistributionResult;
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

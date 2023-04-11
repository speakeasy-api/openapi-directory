import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RequestServiceQuotaIncreaseXAmzTargetEnum {
    ServiceQuotasV20190624RequestServiceQuotaIncrease = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"
}
export declare class RequestServiceQuotaIncreaseRequest extends SpeakeasyBase {
    requestServiceQuotaIncreaseRequest: shared.RequestServiceQuotaIncreaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestServiceQuotaIncreaseXAmzTargetEnum;
}
export declare class RequestServiceQuotaIncreaseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DependencyAccessDeniedException
     */
    dependencyAccessDeniedException?: any;
    /**
     * IllegalArgumentException
     */
    illegalArgumentException?: any;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * NoSuchResourceException
     */
    noSuchResourceException?: any;
    /**
     * QuotaExceededException
     */
    quotaExceededException?: any;
    /**
     * Success
     */
    requestServiceQuotaIncreaseResponse?: shared.RequestServiceQuotaIncreaseResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

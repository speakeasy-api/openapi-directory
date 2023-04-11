import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRequestedServiceQuotaChangeXAmzTargetEnum {
    ServiceQuotasV20190624GetRequestedServiceQuotaChange = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
}
export declare class GetRequestedServiceQuotaChangeRequest extends SpeakeasyBase {
    getRequestedServiceQuotaChangeRequest: shared.GetRequestedServiceQuotaChangeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRequestedServiceQuotaChangeXAmzTargetEnum;
}
export declare class GetRequestedServiceQuotaChangeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getRequestedServiceQuotaChangeResponse?: shared.GetRequestedServiceQuotaChangeResponse;
    /**
     * IllegalArgumentException
     */
    illegalArgumentException?: any;
    /**
     * NoSuchResourceException
     */
    noSuchResourceException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

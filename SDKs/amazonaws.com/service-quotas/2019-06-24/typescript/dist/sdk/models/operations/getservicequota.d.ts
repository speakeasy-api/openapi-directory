import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuota = "ServiceQuotasV20190624.GetServiceQuota"
}
export declare class GetServiceQuotaRequest extends SpeakeasyBase {
    getServiceQuotaRequest: shared.GetServiceQuotaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceQuotaXAmzTargetEnum;
}
export declare class GetServiceQuotaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getServiceQuotaResponse?: shared.GetServiceQuotaResponse;
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

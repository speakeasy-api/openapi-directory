import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota"
}
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
    listRequestedServiceQuotaChangeHistoryByQuotaRequest: shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum;
}
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IllegalArgumentException
     */
    illegalArgumentException?: any;
    /**
     * InvalidPaginationTokenException
     */
    invalidPaginationTokenException?: any;
    /**
     * Success
     */
    listRequestedServiceQuotaChangeHistoryByQuotaResponse?: shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
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

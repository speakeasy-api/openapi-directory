import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
}
export declare class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
    listRequestedServiceQuotaChangeHistoryRequest: shared.ListRequestedServiceQuotaChangeHistoryRequest;
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
    xAmzTarget: ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
}
export declare class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
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
    listRequestedServiceQuotaChangeHistoryResponse?: shared.ListRequestedServiceQuotaChangeHistoryResponse;
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

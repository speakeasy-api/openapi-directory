import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListServiceQuotas = "ServiceQuotasV20190624.ListServiceQuotas"
}
export declare class ListServiceQuotasRequest extends SpeakeasyBase {
    listServiceQuotasRequest: shared.ListServiceQuotasRequest;
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
    xAmzTarget: ListServiceQuotasXAmzTargetEnum;
}
export declare class ListServiceQuotasResponse extends SpeakeasyBase {
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
    listServiceQuotasResponse?: shared.ListServiceQuotasResponse;
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

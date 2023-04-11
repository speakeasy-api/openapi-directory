import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAWSDefaultServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListAWSDefaultServiceQuotas = "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"
}
export declare class ListAWSDefaultServiceQuotasRequest extends SpeakeasyBase {
    listAWSDefaultServiceQuotasRequest: shared.ListAWSDefaultServiceQuotasRequest;
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
    xAmzTarget: ListAWSDefaultServiceQuotasXAmzTargetEnum;
}
export declare class ListAWSDefaultServiceQuotasResponse extends SpeakeasyBase {
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
    listAWSDefaultServiceQuotasResponse?: shared.ListAWSDefaultServiceQuotasResponse;
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

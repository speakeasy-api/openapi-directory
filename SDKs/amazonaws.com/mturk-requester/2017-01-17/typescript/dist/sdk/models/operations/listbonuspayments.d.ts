import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBonusPaymentsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListBonusPayments = "MTurkRequesterServiceV20170117.ListBonusPayments"
}
export declare class ListBonusPaymentsRequest extends SpeakeasyBase {
    listBonusPaymentsRequest: shared.ListBonusPaymentsRequest;
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
    xAmzTarget: ListBonusPaymentsXAmzTargetEnum;
}
export declare class ListBonusPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listBonusPaymentsResponse?: shared.ListBonusPaymentsResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

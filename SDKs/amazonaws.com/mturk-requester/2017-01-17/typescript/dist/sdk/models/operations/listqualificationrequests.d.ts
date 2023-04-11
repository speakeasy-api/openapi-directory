import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListQualificationRequestsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListQualificationRequests = "MTurkRequesterServiceV20170117.ListQualificationRequests"
}
export declare class ListQualificationRequestsRequest extends SpeakeasyBase {
    listQualificationRequestsRequest: shared.ListQualificationRequestsRequest;
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
    xAmzTarget: ListQualificationRequestsXAmzTargetEnum;
}
export declare class ListQualificationRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listQualificationRequestsResponse?: shared.ListQualificationRequestsResponse;
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

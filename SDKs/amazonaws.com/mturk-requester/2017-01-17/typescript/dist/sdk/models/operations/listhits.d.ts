import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHITsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListHITs = "MTurkRequesterServiceV20170117.ListHITs"
}
export declare class ListHITsRequest extends SpeakeasyBase {
    listHITsRequest: shared.ListHITsRequest;
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
    xAmzTarget: ListHITsXAmzTargetEnum;
}
export declare class ListHITsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHITsResponse?: shared.ListHITsResponse;
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

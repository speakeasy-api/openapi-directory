import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceRequestsXAmzTargetEnum {
    CloudApiServiceListResourceRequests = "CloudApiService.ListResourceRequests"
}
export declare class ListResourceRequestsRequest extends SpeakeasyBase {
    listResourceRequestsInput: shared.ListResourceRequestsInput;
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
    xAmzTarget: ListResourceRequestsXAmzTargetEnum;
}
export declare class ListResourceRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listResourceRequestsOutput?: shared.ListResourceRequestsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

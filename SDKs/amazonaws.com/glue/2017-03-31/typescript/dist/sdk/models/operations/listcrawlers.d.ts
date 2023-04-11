import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCrawlersXAmzTargetEnum {
    AWSGlueListCrawlers = "AWSGlue.ListCrawlers"
}
export declare class ListCrawlersRequest extends SpeakeasyBase {
    listCrawlersRequest: shared.ListCrawlersRequest;
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
    xAmzTarget: ListCrawlersXAmzTargetEnum;
}
export declare class ListCrawlersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCrawlersResponse?: shared.ListCrawlersResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCrawlersXAmzTargetEnum {
    AWSGlueGetCrawlers = "AWSGlue.GetCrawlers"
}
export declare class GetCrawlersRequest extends SpeakeasyBase {
    getCrawlersRequest: shared.GetCrawlersRequest;
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
    xAmzTarget: GetCrawlersXAmzTargetEnum;
}
export declare class GetCrawlersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCrawlersResponse?: shared.GetCrawlersResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

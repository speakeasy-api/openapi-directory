import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetCrawlersXAmzTargetEnum {
    AWSGlueBatchGetCrawlers = "AWSGlue.BatchGetCrawlers"
}
export declare class BatchGetCrawlersRequest extends SpeakeasyBase {
    batchGetCrawlersRequest: shared.BatchGetCrawlersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCrawlersXAmzTargetEnum;
}
export declare class BatchGetCrawlersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetCrawlersResponse?: shared.BatchGetCrawlersResponse;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

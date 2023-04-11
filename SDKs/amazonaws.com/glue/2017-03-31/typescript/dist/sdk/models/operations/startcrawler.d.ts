import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartCrawlerXAmzTargetEnum {
    AWSGlueStartCrawler = "AWSGlue.StartCrawler"
}
export declare class StartCrawlerRequest extends SpeakeasyBase {
    startCrawlerRequest: shared.StartCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCrawlerXAmzTargetEnum;
}
export declare class StartCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CrawlerRunningException
     */
    crawlerRunningException?: any;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    startCrawlerResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

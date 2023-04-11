import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopCrawlerXAmzTargetEnum {
    AWSGlueStopCrawler = "AWSGlue.StopCrawler"
}
export declare class StopCrawlerRequest extends SpeakeasyBase {
    stopCrawlerRequest: shared.StopCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCrawlerXAmzTargetEnum;
}
export declare class StopCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CrawlerNotRunningException
     */
    crawlerNotRunningException?: any;
    /**
     * CrawlerStoppingException
     */
    crawlerStoppingException?: any;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopCrawlerResponse?: Record<string, any>;
}

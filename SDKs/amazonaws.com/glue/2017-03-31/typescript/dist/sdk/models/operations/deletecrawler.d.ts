import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCrawlerXAmzTargetEnum {
    AWSGlueDeleteCrawler = "AWSGlue.DeleteCrawler"
}
export declare class DeleteCrawlerRequest extends SpeakeasyBase {
    deleteCrawlerRequest: shared.DeleteCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCrawlerXAmzTargetEnum;
}
export declare class DeleteCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CrawlerRunningException
     */
    crawlerRunningException?: any;
    /**
     * Success
     */
    deleteCrawlerResponse?: Record<string, any>;
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
     * SchedulerTransitioningException
     */
    schedulerTransitioningException?: any;
}

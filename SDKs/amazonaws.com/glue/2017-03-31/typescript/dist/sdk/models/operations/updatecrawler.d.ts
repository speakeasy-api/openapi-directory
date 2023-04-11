import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCrawlerXAmzTargetEnum {
    AWSGlueUpdateCrawler = "AWSGlue.UpdateCrawler"
}
export declare class UpdateCrawlerRequest extends SpeakeasyBase {
    updateCrawlerRequest: shared.UpdateCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCrawlerXAmzTargetEnum;
}
export declare class UpdateCrawlerResponse extends SpeakeasyBase {
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
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCrawlerResponse?: Record<string, any>;
    /**
     * VersionMismatchException
     */
    versionMismatchException?: any;
}

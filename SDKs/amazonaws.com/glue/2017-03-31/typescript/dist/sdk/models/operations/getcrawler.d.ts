import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCrawlerXAmzTargetEnum {
    AWSGlueGetCrawler = "AWSGlue.GetCrawler"
}
export declare class GetCrawlerRequest extends SpeakeasyBase {
    getCrawlerRequest: shared.GetCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCrawlerXAmzTargetEnum;
}
export declare class GetCrawlerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getCrawlerResponse?: shared.GetCrawlerResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

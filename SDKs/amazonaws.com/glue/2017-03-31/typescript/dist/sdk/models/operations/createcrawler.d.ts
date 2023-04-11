import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCrawlerXAmzTargetEnum {
    AWSGlueCreateCrawler = "AWSGlue.CreateCrawler"
}
export declare class CreateCrawlerRequest extends SpeakeasyBase {
    createCrawlerRequest: shared.CreateCrawlerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCrawlerXAmzTargetEnum;
}
export declare class CreateCrawlerResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createCrawlerResponse?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

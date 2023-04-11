import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEntityRecognizerSummariesXAmzTargetEnum {
    Comprehend20171127ListEntityRecognizerSummaries = "Comprehend_20171127.ListEntityRecognizerSummaries"
}
export declare class ListEntityRecognizerSummariesRequest extends SpeakeasyBase {
    listEntityRecognizerSummariesRequest: shared.ListEntityRecognizerSummariesRequest;
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
    xAmzTarget: ListEntityRecognizerSummariesXAmzTargetEnum;
}
export declare class ListEntityRecognizerSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listEntityRecognizerSummariesResponse?: shared.ListEntityRecognizerSummariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

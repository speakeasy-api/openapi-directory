import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTextTranslationJobsXAmzTargetEnum {
    AWSShineFrontendService20170701ListTextTranslationJobs = "AWSShineFrontendService_20170701.ListTextTranslationJobs"
}
export declare class ListTextTranslationJobsRequest extends SpeakeasyBase {
    listTextTranslationJobsRequest: shared.ListTextTranslationJobsRequest;
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
    xAmzTarget: ListTextTranslationJobsXAmzTargetEnum;
}
export declare class ListTextTranslationJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidFilterException
     */
    invalidFilterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listTextTranslationJobsResponse?: shared.ListTextTranslationJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentClassificationJobsXAmzTargetEnum {
    Comprehend20171127ListDocumentClassificationJobs = "Comprehend_20171127.ListDocumentClassificationJobs"
}
export declare class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
    listDocumentClassificationJobsRequest: shared.ListDocumentClassificationJobsRequest;
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
    xAmzTarget: ListDocumentClassificationJobsXAmzTargetEnum;
}
export declare class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
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
    listDocumentClassificationJobsResponse?: shared.ListDocumentClassificationJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

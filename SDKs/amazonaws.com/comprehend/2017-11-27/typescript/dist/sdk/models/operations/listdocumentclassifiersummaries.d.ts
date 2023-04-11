import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentClassifierSummariesXAmzTargetEnum {
    Comprehend20171127ListDocumentClassifierSummaries = "Comprehend_20171127.ListDocumentClassifierSummaries"
}
export declare class ListDocumentClassifierSummariesRequest extends SpeakeasyBase {
    listDocumentClassifierSummariesRequest: shared.ListDocumentClassifierSummariesRequest;
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
    xAmzTarget: ListDocumentClassifierSummariesXAmzTargetEnum;
}
export declare class ListDocumentClassifierSummariesResponse extends SpeakeasyBase {
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
    listDocumentClassifierSummariesResponse?: shared.ListDocumentClassifierSummariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

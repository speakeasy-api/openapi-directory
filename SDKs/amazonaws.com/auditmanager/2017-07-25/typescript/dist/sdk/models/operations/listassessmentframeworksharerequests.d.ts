import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Specifies whether the share request is a sent request or a received request.
 */
export declare enum ListAssessmentFrameworkShareRequestsRequestTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
export declare class ListAssessmentFrameworkShareRequestsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
    /**
     *  Specifies whether the share request is a sent request or a received request.
     */
    requestType: ListAssessmentFrameworkShareRequestsRequestTypeEnum;
}
export declare class ListAssessmentFrameworkShareRequestsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAssessmentFrameworkShareRequestsResponse?: shared.ListAssessmentFrameworkShareRequestsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

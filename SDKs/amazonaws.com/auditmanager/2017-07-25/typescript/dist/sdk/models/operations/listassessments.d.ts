import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The current status of the assessment.
 */
export declare enum ListAssessmentsStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class ListAssessmentsRequest extends SpeakeasyBase {
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
     *  The current status of the assessment.
     */
    status?: ListAssessmentsStatusEnum;
}
export declare class ListAssessmentsResponse extends SpeakeasyBase {
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
    listAssessmentsResponse?: shared.ListAssessmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

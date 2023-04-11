import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of framework, such as a standard framework or a custom framework.
 */
export declare enum ListAssessmentFrameworksFrameworkTypeEnum {
    Standard = "Standard",
    Custom = "Custom"
}
export declare class ListAssessmentFrameworksRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The type of framework, such as a standard framework or a custom framework.
     */
    frameworkType: ListAssessmentFrameworksFrameworkTypeEnum;
    /**
     *  Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
}
export declare class ListAssessmentFrameworksResponse extends SpeakeasyBase {
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
    listAssessmentFrameworksResponse?: shared.ListAssessmentFrameworksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

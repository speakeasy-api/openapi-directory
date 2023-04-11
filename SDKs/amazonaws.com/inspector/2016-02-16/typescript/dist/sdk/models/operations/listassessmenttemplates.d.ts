import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssessmentTemplatesXAmzTargetEnum {
    InspectorServiceListAssessmentTemplates = "InspectorService.ListAssessmentTemplates"
}
export declare class ListAssessmentTemplatesRequest extends SpeakeasyBase {
    listAssessmentTemplatesRequest: shared.ListAssessmentTemplatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentTemplatesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAssessmentTemplatesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listAssessmentTemplatesResponse?: shared.ListAssessmentTemplatesResponse;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

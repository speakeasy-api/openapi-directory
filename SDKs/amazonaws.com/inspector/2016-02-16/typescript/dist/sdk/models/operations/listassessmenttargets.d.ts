import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssessmentTargetsXAmzTargetEnum {
    InspectorServiceListAssessmentTargets = "InspectorService.ListAssessmentTargets"
}
export declare class ListAssessmentTargetsRequest extends SpeakeasyBase {
    listAssessmentTargetsRequest: shared.ListAssessmentTargetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentTargetsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAssessmentTargetsResponse extends SpeakeasyBase {
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
    listAssessmentTargetsResponse?: shared.ListAssessmentTargetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

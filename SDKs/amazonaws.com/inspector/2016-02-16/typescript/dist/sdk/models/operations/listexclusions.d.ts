import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExclusionsXAmzTargetEnum {
    InspectorServiceListExclusions = "InspectorService.ListExclusions"
}
export declare class ListExclusionsRequest extends SpeakeasyBase {
    listExclusionsRequest: shared.ListExclusionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExclusionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListExclusionsResponse extends SpeakeasyBase {
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
    listExclusionsResponse?: shared.ListExclusionsResponse;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

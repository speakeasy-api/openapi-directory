import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFindingsXAmzTargetEnum {
    InspectorServiceListFindings = "InspectorService.ListFindings"
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    listFindingsRequest: shared.ListFindingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFindingsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListFindingsResponse extends SpeakeasyBase {
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
    listFindingsResponse?: shared.ListFindingsResponse;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

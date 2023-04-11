import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFindingAggregatorsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return. This operation currently only returns a single result.
     */
    maxResults?: number;
    /**
     * The token returned with the previous set of results. Identifies the next set of results to return.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFindingAggregatorsResponse extends SpeakeasyBase {
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
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listFindingAggregatorsResponse?: shared.ListFindingAggregatorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

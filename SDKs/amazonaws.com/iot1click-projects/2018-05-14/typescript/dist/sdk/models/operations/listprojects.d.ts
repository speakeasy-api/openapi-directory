import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListProjectsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return per request. If not set, a default value of 100 is used.
     */
    maxResults?: number;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: string;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listProjectsResponse?: shared.ListProjectsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

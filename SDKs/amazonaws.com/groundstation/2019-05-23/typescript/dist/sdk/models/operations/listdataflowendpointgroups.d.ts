import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDataflowEndpointGroupsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Maximum number of dataflow endpoint groups returned.
     */
    maxResults?: number;
    /**
     * Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.
     */
    nextToken?: string;
}
export declare class ListDataflowEndpointGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listDataflowEndpointGroupsResponse?: shared.ListDataflowEndpointGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

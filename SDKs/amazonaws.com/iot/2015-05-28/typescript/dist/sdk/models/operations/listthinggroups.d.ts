import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListThingGroupsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * A filter that limits the results to those with the specified name prefix.
     */
    namePrefixFilter?: string;
    /**
     * To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
     */
    nextToken?: string;
    /**
     * A filter that limits the results to those with the specified parent group.
     */
    parentGroup?: string;
    /**
     * If true, return child groups as well.
     */
    recursive?: boolean;
}
export declare class ListThingGroupsResponse extends SpeakeasyBase {
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
    listThingGroupsResponse?: shared.ListThingGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

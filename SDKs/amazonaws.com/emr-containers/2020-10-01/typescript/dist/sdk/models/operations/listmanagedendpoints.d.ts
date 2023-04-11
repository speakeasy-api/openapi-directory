import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListManagedEndpointsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The date and time after which the endpoints are created.
     */
    createdAfter?: Date;
    /**
     * The date and time before which the endpoints are created.
     */
    createdBefore?: Date;
    /**
     * The maximum number of managed endpoints that can be listed.
     */
    maxResults?: number;
    /**
     *  The token for the next set of managed endpoints to return.
     */
    nextToken?: string;
    /**
     * The states of the managed endpoints.
     */
    states?: shared.EndpointStateEnum[];
    /**
     * The types of the managed endpoints.
     */
    types?: string[];
    /**
     * The ID of the virtual cluster.
     */
    virtualClusterId: string;
}
export declare class ListManagedEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listManagedEndpointsResponse?: shared.ListManagedEndpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

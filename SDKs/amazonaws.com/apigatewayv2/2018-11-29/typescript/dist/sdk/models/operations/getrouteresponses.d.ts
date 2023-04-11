import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRouteResponsesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    maxResults?: string;
    /**
     * The next page of elements from this collection. Not valid for the last element of the collection.
     */
    nextToken?: string;
    /**
     * The route ID.
     */
    routeId: string;
}
export declare class GetRouteResponsesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getRouteResponsesResponse?: shared.GetRouteResponsesResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

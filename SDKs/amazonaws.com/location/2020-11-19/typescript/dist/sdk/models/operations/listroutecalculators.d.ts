import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRouteCalculatorsRequestBody extends SpeakeasyBase {
    /**
     * <p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>
     */
    maxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>
     */
    nextToken?: string;
}
export declare class ListRouteCalculatorsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListRouteCalculatorsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRouteCalculatorsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRouteCalculatorsResponse?: shared.ListRouteCalculatorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

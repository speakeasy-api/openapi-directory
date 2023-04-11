import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDatasourcePackagesRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the behavior graph.
     */
    graphArn: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
     */
    nextToken?: string;
}
export declare class ListDatasourcePackagesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListDatasourcePackagesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDatasourcePackagesResponse extends SpeakeasyBase {
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
    listDatasourcePackagesResponse?: shared.ListDatasourcePackagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

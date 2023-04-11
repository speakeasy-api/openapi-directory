import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRelatedItemsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the incident record containing the listed related items.
     */
    incidentRecordArn: string;
    /**
     * The maximum number of related items per page.
     */
    maxResults?: number;
    /**
     * The pagination token to continue to the next page of results.
     */
    nextToken?: string;
}
export declare class ListRelatedItemsRequest extends SpeakeasyBase {
    requestBody: ListRelatedItemsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRelatedItemsResponse extends SpeakeasyBase {
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
    listRelatedItemsOutput?: shared.ListRelatedItemsOutput;
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

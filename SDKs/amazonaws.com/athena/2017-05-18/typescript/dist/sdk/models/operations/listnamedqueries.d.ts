import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNamedQueriesXAmzTargetEnum {
    AmazonAthenaListNamedQueries = "AmazonAthena.ListNamedQueries"
}
export declare class ListNamedQueriesRequest extends SpeakeasyBase {
    listNamedQueriesInput: shared.ListNamedQueriesInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNamedQueriesXAmzTargetEnum;
}
export declare class ListNamedQueriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listNamedQueriesOutput?: shared.ListNamedQueriesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

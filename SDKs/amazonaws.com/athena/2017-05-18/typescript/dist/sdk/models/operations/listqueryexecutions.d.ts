import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListQueryExecutionsXAmzTargetEnum {
    AmazonAthenaListQueryExecutions = "AmazonAthena.ListQueryExecutions"
}
export declare class ListQueryExecutionsRequest extends SpeakeasyBase {
    listQueryExecutionsInput: shared.ListQueryExecutionsInput;
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
    xAmzTarget: ListQueryExecutionsXAmzTargetEnum;
}
export declare class ListQueryExecutionsResponse extends SpeakeasyBase {
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
    listQueryExecutionsOutput?: shared.ListQueryExecutionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

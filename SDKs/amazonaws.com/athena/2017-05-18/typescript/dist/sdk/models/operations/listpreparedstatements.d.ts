import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPreparedStatementsXAmzTargetEnum {
    AmazonAthenaListPreparedStatements = "AmazonAthena.ListPreparedStatements"
}
export declare class ListPreparedStatementsRequest extends SpeakeasyBase {
    listPreparedStatementsInput: shared.ListPreparedStatementsInput;
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
    xAmzTarget: ListPreparedStatementsXAmzTargetEnum;
}
export declare class ListPreparedStatementsResponse extends SpeakeasyBase {
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
    listPreparedStatementsOutput?: shared.ListPreparedStatementsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

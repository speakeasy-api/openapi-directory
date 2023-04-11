import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCommandsXAmzTargetEnum {
    AmazonSSMListCommands = "AmazonSSM.ListCommands"
}
export declare class ListCommandsRequest extends SpeakeasyBase {
    listCommandsRequest: shared.ListCommandsRequest;
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
    xAmzTarget: ListCommandsXAmzTargetEnum;
}
export declare class ListCommandsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidCommandId
     */
    invalidCommandId?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listCommandsResult?: shared.ListCommandsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

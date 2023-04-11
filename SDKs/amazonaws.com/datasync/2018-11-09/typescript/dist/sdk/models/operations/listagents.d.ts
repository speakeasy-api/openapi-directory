import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAgentsXAmzTargetEnum {
    FmrsServiceListAgents = "FmrsService.ListAgents"
}
export declare class ListAgentsRequest extends SpeakeasyBase {
    listAgentsRequest: shared.ListAgentsRequest;
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
    xAmzTarget: ListAgentsXAmzTargetEnum;
}
export declare class ListAgentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listAgentsResponse?: shared.ListAgentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

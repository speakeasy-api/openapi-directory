import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccessesXAmzTargetEnum {
    TransferServiceListAccesses = "TransferService.ListAccesses"
}
export declare class ListAccessesRequest extends SpeakeasyBase {
    listAccessesRequest: shared.ListAccessesRequest;
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
    xAmzTarget: ListAccessesXAmzTargetEnum;
}
export declare class ListAccessesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listAccessesResponse?: shared.ListAccessesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

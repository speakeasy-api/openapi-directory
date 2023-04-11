import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServersXAmzTargetEnum {
    TransferServiceListServers = "TransferService.ListServers"
}
export declare class ListServersRequest extends SpeakeasyBase {
    listServersRequest: shared.ListServersRequest;
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
    xAmzTarget: ListServersXAmzTargetEnum;
}
export declare class ListServersResponse extends SpeakeasyBase {
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
    listServersResponse?: shared.ListServersResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

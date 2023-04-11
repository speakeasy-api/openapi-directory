import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProtocolsListsXAmzTargetEnum {
    AWSFMS20180101ListProtocolsLists = "AWSFMS_20180101.ListProtocolsLists"
}
export declare class ListProtocolsListsRequest extends SpeakeasyBase {
    listProtocolsListsRequest: shared.ListProtocolsListsRequest;
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
    xAmzTarget: ListProtocolsListsXAmzTargetEnum;
}
export declare class ListProtocolsListsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * Success
     */
    listProtocolsListsResponse?: shared.ListProtocolsListsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

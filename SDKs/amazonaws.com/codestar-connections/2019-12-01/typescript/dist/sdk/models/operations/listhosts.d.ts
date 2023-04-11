import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHostsXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts"
}
export declare class ListHostsRequest extends SpeakeasyBase {
    listHostsInput: shared.ListHostsInput;
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
    xAmzTarget: ListHostsXAmzTargetEnum;
}
export declare class ListHostsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHostsOutput?: shared.ListHostsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

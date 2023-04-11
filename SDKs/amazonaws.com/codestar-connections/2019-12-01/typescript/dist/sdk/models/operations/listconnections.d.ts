import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConnectionsXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections"
}
export declare class ListConnectionsRequest extends SpeakeasyBase {
    listConnectionsInput: shared.ListConnectionsInput;
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
    xAmzTarget: ListConnectionsXAmzTargetEnum;
}
export declare class ListConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listConnectionsOutput?: shared.ListConnectionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

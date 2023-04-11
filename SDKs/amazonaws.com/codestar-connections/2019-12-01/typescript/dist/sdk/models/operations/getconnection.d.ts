import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection"
}
export declare class GetConnectionRequest extends SpeakeasyBase {
    getConnectionInput: shared.GetConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionXAmzTargetEnum;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getConnectionOutput?: shared.GetConnectionOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
}

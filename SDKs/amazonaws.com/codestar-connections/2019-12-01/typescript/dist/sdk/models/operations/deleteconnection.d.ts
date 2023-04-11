import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection"
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    deleteConnectionInput: shared.DeleteConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionXAmzTargetEnum;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteConnectionOutput?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

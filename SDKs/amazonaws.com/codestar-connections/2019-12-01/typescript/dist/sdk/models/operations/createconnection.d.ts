import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection"
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    createConnectionInput: shared.CreateConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createConnectionOutput?: shared.CreateConnectionOutput;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

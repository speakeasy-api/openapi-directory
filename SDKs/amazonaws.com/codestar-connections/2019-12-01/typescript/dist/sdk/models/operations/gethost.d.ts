import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost"
}
export declare class GetHostRequest extends SpeakeasyBase {
    getHostInput: shared.GetHostInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHostXAmzTargetEnum;
}
export declare class GetHostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getHostOutput?: shared.GetHostOutput;
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

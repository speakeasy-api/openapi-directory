import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost"
}
export declare class UpdateHostRequest extends SpeakeasyBase {
    updateHostInput: shared.UpdateHostInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHostXAmzTargetEnum;
}
export declare class UpdateHostResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updateHostOutput?: Record<string, any>;
}

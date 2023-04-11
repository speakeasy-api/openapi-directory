import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost"
}
export declare class DeleteHostRequest extends SpeakeasyBase {
    deleteHostInput: shared.DeleteHostInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHostXAmzTargetEnum;
}
export declare class DeleteHostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteHostOutput?: Record<string, any>;
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

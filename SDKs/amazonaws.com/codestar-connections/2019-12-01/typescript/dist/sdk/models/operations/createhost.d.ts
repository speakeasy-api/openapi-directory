import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost"
}
export declare class CreateHostRequest extends SpeakeasyBase {
    createHostInput: shared.CreateHostInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHostXAmzTargetEnum;
}
export declare class CreateHostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHostOutput?: shared.CreateHostOutput;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

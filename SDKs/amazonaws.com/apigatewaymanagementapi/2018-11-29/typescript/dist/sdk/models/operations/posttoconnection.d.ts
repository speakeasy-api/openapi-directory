import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostToConnectionRequestBody extends SpeakeasyBase {
    /**
     * The data to be sent to the client specified by its connection id.
     */
    data: string;
}
export declare class PostToConnectionRequest extends SpeakeasyBase {
    requestBody: PostToConnectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the connection that a specific client is using.
     */
    connectionId: string;
}
export declare class PostToConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * GoneException
     */
    goneException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

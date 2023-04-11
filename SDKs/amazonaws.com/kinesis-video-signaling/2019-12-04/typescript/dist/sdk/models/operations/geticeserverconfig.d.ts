import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the desired service. Currently, <code>TURN</code> is the only valid value.
 */
export declare enum GetIceServerConfigRequestBodyServiceEnum {
    Turn = "TURN"
}
export declare class GetIceServerConfigRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers.
     */
    channelARN: string;
    /**
     * Unique identifier for the viewer. Must be unique within the signaling channel.
     */
    clientId?: string;
    /**
     * Specifies the desired service. Currently, <code>TURN</code> is the only valid value.
     */
    service?: GetIceServerConfigRequestBodyServiceEnum;
    /**
     * An optional user ID to be associated with the credentials.
     */
    username?: string;
}
export declare class GetIceServerConfigRequest extends SpeakeasyBase {
    requestBody: GetIceServerConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIceServerConfigResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getIceServerConfigResponse?: shared.GetIceServerConfigResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidClientException
     */
    invalidClientException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * SessionExpiredException
     */
    sessionExpiredException?: any;
}

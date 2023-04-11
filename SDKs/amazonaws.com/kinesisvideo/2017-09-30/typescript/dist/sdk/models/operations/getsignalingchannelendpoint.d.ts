import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.
 */
export declare class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration extends SpeakeasyBase {
    protocols?: shared.ChannelProtocolEnum[];
    role?: shared.ChannelRoleEnum;
}
export declare class GetSignalingChannelEndpointRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
     */
    channelARN: string;
    /**
     * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.
     */
    singleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
}
export declare class GetSignalingChannelEndpointRequest extends SpeakeasyBase {
    requestBody: GetSignalingChannelEndpointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSignalingChannelEndpointResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getSignalingChannelEndpointOutput?: shared.GetSignalingChannelEndpointOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

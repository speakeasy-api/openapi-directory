import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type.
 */
export declare enum CreateSignalingChannelRequestBodyChannelTypeEnum {
    SingleMaster = "SINGLE_MASTER",
    FullMesh = "FULL_MESH"
}
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
 */
export declare class CreateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
    messageTtlSeconds?: number;
}
export declare class CreateSignalingChannelRequestBody extends SpeakeasyBase {
    /**
     * A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.
     */
    channelName: string;
    /**
     * A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type.
     */
    channelType?: CreateSignalingChannelRequestBodyChannelTypeEnum;
    /**
     * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
     */
    singleMasterConfiguration?: CreateSignalingChannelRequestBodySingleMasterConfiguration;
    /**
     * A set of tags (key-value pairs) that you want to associate with this channel.
     */
    tags?: shared.Tag[];
}
export declare class CreateSignalingChannelRequest extends SpeakeasyBase {
    requestBody: CreateSignalingChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSignalingChannelResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountChannelLimitExceededException
     */
    accountChannelLimitExceededException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    createSignalingChannelOutput?: shared.CreateSignalingChannelOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagsPerResourceExceededLimitException
     */
    tagsPerResourceExceededLimitException?: any;
}

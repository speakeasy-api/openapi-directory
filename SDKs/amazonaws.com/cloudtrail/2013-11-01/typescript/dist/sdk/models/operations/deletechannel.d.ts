import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteChannelXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannel = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel"
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    deleteChannelRequest: shared.DeleteChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteChannelXAmzTargetEnum;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    /**
     * ChannelARNInvalidException
     */
    channelARNInvalidException?: any;
    /**
     * ChannelNotFoundException
     */
    channelNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteChannelResponse?: Record<string, any>;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

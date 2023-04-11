import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetChannelXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannel = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel"
}
export declare class GetChannelRequest extends SpeakeasyBase {
    getChannelRequest: shared.GetChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetChannelXAmzTargetEnum;
}
export declare class GetChannelResponse extends SpeakeasyBase {
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
    getChannelResponse?: shared.GetChannelResponse;
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

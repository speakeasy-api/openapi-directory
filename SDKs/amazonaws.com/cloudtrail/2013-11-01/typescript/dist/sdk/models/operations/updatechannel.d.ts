import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateChannelXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannel = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel"
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    updateChannelRequest: shared.UpdateChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateChannelXAmzTargetEnum;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    /**
     * ChannelARNInvalidException
     */
    channelARNInvalidException?: any;
    /**
     * ChannelAlreadyExistsException
     */
    channelAlreadyExistsException?: any;
    /**
     * ChannelNotFoundException
     */
    channelNotFoundException?: any;
    contentType: string;
    /**
     * EventDataStoreARNInvalidException
     */
    eventDataStoreARNInvalidException?: any;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InvalidEventDataStoreCategoryException
     */
    invalidEventDataStoreCategoryException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
    /**
     * Success
     */
    updateChannelResponse?: shared.UpdateChannelResponse;
}

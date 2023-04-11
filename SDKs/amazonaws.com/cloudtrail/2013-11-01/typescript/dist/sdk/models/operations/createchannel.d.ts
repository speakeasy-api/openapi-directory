import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateChannelXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannel = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel"
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    createChannelRequest: shared.CreateChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateChannelXAmzTargetEnum;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    /**
     * ChannelAlreadyExistsException
     */
    channelAlreadyExistsException?: any;
    /**
     * ChannelMaxLimitExceededException
     */
    channelMaxLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    createChannelResponse?: shared.CreateChannelResponse;
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
     * InvalidSourceException
     */
    invalidSourceException?: any;
    /**
     * InvalidTagParameterException
     */
    invalidTagParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagsLimitExceededException
     */
    tagsLimitExceededException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
 */
export declare class UpdateChannelRequestBodyChannelStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedChannelS3Storage;
    serviceManagedS3?: Record<string, any>;
}
/**
 * How long, in days, message data is kept.
 */
export declare class UpdateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class UpdateChannelRequestBody extends SpeakeasyBase {
    /**
     * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
     */
    channelStorage?: UpdateChannelRequestBodyChannelStorage;
    /**
     * How long, in days, message data is kept.
     */
    retentionPeriod?: UpdateChannelRequestBodyRetentionPeriod;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody: UpdateChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the channel to be updated.
     */
    channelName: string;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

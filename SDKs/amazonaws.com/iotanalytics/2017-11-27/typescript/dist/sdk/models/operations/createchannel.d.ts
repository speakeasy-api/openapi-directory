import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
 */
export declare class CreateChannelRequestBodyChannelStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedChannelS3Storage;
    serviceManagedS3?: Record<string, any>;
}
/**
 * How long, in days, message data is kept.
 */
export declare class CreateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class CreateChannelRequestBody extends SpeakeasyBase {
    /**
     * The name of the channel.
     */
    channelName: string;
    /**
     * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
     */
    channelStorage?: CreateChannelRequestBodyChannelStorage;
    /**
     * How long, in days, message data is kept.
     */
    retentionPeriod?: CreateChannelRequestBodyRetentionPeriod;
    /**
     * Metadata which can be used to manage the channel.
     */
    tags?: shared.Tag[];
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    requestBody: CreateChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createChannelResponse?: shared.CreateChannelResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

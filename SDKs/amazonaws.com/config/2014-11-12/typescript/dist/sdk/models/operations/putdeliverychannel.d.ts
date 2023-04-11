import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutDeliveryChannelXAmzTargetEnum {
    StarlingDoveServicePutDeliveryChannel = "StarlingDoveService.PutDeliveryChannel"
}
export declare class PutDeliveryChannelRequest extends SpeakeasyBase {
    putDeliveryChannelRequest: shared.PutDeliveryChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDeliveryChannelXAmzTargetEnum;
}
export declare class PutDeliveryChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientDeliveryPolicyException
     */
    insufficientDeliveryPolicyException?: any;
    /**
     * InvalidDeliveryChannelNameException
     */
    invalidDeliveryChannelNameException?: any;
    /**
     * InvalidS3KeyPrefixException
     */
    invalidS3KeyPrefixException?: any;
    /**
     * InvalidS3KmsKeyArnException
     */
    invalidS3KmsKeyArnException?: any;
    /**
     * InvalidSNSTopicARNException
     */
    invalidSNSTopicARNException?: any;
    /**
     * MaxNumberOfDeliveryChannelsExceededException
     */
    maxNumberOfDeliveryChannelsExceededException?: any;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    /**
     * NoSuchBucketException
     */
    noSuchBucketException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

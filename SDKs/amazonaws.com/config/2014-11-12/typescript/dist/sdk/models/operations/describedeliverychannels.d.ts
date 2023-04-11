import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeliveryChannelsXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannels = "StarlingDoveService.DescribeDeliveryChannels"
}
export declare class DescribeDeliveryChannelsRequest extends SpeakeasyBase {
    describeDeliveryChannelsRequest: shared.DescribeDeliveryChannelsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryChannelsXAmzTargetEnum;
}
export declare class DescribeDeliveryChannelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeliveryChannelsResponse?: shared.DescribeDeliveryChannelsResponse;
    /**
     * NoSuchDeliveryChannelException
     */
    noSuchDeliveryChannelException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

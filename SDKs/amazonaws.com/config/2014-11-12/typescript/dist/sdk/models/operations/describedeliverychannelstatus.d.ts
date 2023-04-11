import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeliveryChannelStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannelStatus = "StarlingDoveService.DescribeDeliveryChannelStatus"
}
export declare class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
    describeDeliveryChannelStatusRequest: shared.DescribeDeliveryChannelStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryChannelStatusXAmzTargetEnum;
}
export declare class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeliveryChannelStatusResponse?: shared.DescribeDeliveryChannelStatusResponse;
    /**
     * NoSuchDeliveryChannelException
     */
    noSuchDeliveryChannelException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

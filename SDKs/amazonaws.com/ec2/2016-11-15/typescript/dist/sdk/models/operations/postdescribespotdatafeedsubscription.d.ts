import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeSpotDatafeedSubscriptionActionEnum {
    DescribeSpotDatafeedSubscription = "DescribeSpotDatafeedSubscription"
}
export declare enum POSTDescribeSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
    action: POSTDescribeSpotDatafeedSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeSpotDatafeedSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

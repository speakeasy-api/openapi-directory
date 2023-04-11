import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}
export declare enum GETDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDescribeEventSubscriptionsRequest extends SpeakeasyBase {
    action: GETDescribeEventSubscriptionsActionEnum;
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
    version: GETDescribeEventSubscriptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEventSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

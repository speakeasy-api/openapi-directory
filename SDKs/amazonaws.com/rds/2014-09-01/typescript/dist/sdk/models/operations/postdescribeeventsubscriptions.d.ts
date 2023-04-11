import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}
export declare enum POSTDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeEventSubscriptionsRequest extends SpeakeasyBase {
    action: POSTDescribeEventSubscriptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeEventSubscriptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeEventSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

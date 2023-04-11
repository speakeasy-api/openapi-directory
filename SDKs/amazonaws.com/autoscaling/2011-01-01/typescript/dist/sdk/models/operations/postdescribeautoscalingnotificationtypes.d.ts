import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAutoScalingNotificationTypesActionEnum {
    DescribeAutoScalingNotificationTypes = "DescribeAutoScalingNotificationTypes"
}
export declare enum POSTDescribeAutoScalingNotificationTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDescribeAutoScalingNotificationTypesRequest extends SpeakeasyBase {
    action: POSTDescribeAutoScalingNotificationTypesActionEnum;
    version: POSTDescribeAutoScalingNotificationTypesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAutoScalingNotificationTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

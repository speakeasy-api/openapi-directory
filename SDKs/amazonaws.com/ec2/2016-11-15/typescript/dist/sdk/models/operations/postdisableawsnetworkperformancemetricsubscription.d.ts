import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableAwsNetworkPerformanceMetricSubscriptionActionEnum {
    DisableAwsNetworkPerformanceMetricSubscription = "DisableAwsNetworkPerformanceMetricSubscription"
}
export declare enum POSTDisableAwsNetworkPerformanceMetricSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableAwsNetworkPerformanceMetricSubscriptionRequest extends SpeakeasyBase {
    action: POSTDisableAwsNetworkPerformanceMetricSubscriptionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableAwsNetworkPerformanceMetricSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableAwsNetworkPerformanceMetricSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

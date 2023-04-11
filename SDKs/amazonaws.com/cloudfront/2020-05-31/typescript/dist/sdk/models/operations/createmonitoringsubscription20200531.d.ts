import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 */
export declare class CreateMonitoringSubscription20200531RequestBodyMonitoringSubscription extends SpeakeasyBase {
    realtimeMetricsSubscriptionConfig?: shared.RealtimeMetricsSubscriptionConfig;
}
export declare class CreateMonitoringSubscription20200531RequestBody extends SpeakeasyBase {
    /**
     * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
     */
    monitoringSubscription: CreateMonitoringSubscription20200531RequestBodyMonitoringSubscription;
}
export declare class CreateMonitoringSubscription20200531Request extends SpeakeasyBase {
    /**
     * The ID of the distribution that you are enabling metrics for.
     */
    distributionId: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMonitoringSubscription20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

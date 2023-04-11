import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateVpcEndpointConnectionNotificationActionEnum {
    CreateVpcEndpointConnectionNotification = "CreateVpcEndpointConnectionNotification"
}
export declare enum GETCreateVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    action: GETCreateVpcEndpointConnectionNotificationActionEnum;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The endpoint events for which to receive notifications. Valid values are <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.
     */
    connectionEvents: string[];
    /**
     * The ARN of the SNS topic for the notifications.
     */
    connectionNotificationArn: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the endpoint service.
     */
    serviceId?: string;
    version: GETCreateVpcEndpointConnectionNotificationVersionEnum;
    /**
     * The ID of the endpoint.
     */
    vpcEndpointId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

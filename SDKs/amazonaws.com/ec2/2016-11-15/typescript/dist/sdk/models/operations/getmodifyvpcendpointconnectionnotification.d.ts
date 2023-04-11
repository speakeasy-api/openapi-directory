import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcEndpointConnectionNotificationActionEnum {
    ModifyVpcEndpointConnectionNotification = "ModifyVpcEndpointConnectionNotification"
}
export declare enum GETModifyVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    action: GETModifyVpcEndpointConnectionNotificationActionEnum;
    /**
     * The events for the endpoint. Valid values are <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.
     */
    connectionEvents?: string[];
    /**
     * The ARN for the SNS topic for the notification.
     */
    connectionNotificationArn?: string;
    /**
     * The ID of the notification.
     */
    connectionNotificationId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETModifyVpcEndpointConnectionNotificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

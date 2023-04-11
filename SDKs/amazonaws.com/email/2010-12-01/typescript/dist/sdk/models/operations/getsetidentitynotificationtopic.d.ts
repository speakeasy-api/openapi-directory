import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetIdentityNotificationTopicActionEnum {
    SetIdentityNotificationTopic = "SetIdentityNotificationTopic"
}
/**
 * The type of notifications that will be published to the specified Amazon SNS topic.
 */
export declare enum GETSetIdentityNotificationTopicNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}
export declare enum GETSetIdentityNotificationTopicVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSetIdentityNotificationTopicRequest extends SpeakeasyBase {
    action: GETSetIdentityNotificationTopicActionEnum;
    /**
     * <p>The identity (email address or domain) that you want to set the Amazon SNS topic for.</p> <important> <p>You can only specify a verified identity for this parameter.</p> </important> <p>You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: <code>sender@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
     */
    identity: string;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic.
     */
    notificationType: GETSetIdentityNotificationTopicNotificationTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing is disabled.
     */
    snsTopic?: string;
    version: GETSetIdentityNotificationTopicVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetIdentityNotificationTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

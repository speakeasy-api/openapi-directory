import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPutNotificationConfigurationActionEnum {
    PutNotificationConfiguration = "PutNotificationConfiguration"
}
export declare enum GETPutNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETPutNotificationConfigurationRequest extends SpeakeasyBase {
    action: GETPutNotificationConfigurationActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the <a>DescribeAutoScalingNotificationTypes</a> API.
     */
    notificationTypes: string[];
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic.
     */
    topicARN: string;
    version: GETPutNotificationConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPutNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

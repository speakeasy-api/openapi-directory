import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteNotificationConfigurationActionEnum {
    DeleteNotificationConfiguration = "DeleteNotificationConfiguration"
}
export declare enum GETDeleteNotificationConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDeleteNotificationConfigurationRequest extends SpeakeasyBase {
    action: GETDeleteNotificationConfigurationActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic.
     */
    topicARN: string;
    version: GETDeleteNotificationConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteNotificationConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

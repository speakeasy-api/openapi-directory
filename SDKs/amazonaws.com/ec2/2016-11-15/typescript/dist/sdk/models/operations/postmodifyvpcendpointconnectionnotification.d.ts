import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpcEndpointConnectionNotificationActionEnum {
    ModifyVpcEndpointConnectionNotification = "ModifyVpcEndpointConnectionNotification"
}
export declare enum POSTModifyVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    action: POSTModifyVpcEndpointConnectionNotificationActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpcEndpointConnectionNotificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

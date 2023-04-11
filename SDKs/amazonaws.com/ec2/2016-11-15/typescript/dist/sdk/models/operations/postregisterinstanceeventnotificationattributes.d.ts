import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterInstanceEventNotificationAttributesActionEnum {
    RegisterInstanceEventNotificationAttributes = "RegisterInstanceEventNotificationAttributes"
}
export declare enum POSTRegisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRegisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    action: POSTRegisterInstanceEventNotificationAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterInstanceEventNotificationAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagMFADeviceActionEnum {
    UntagMFADevice = "UntagMFADevice"
}
export declare enum POSTUntagMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagMFADeviceRequest extends SpeakeasyBase {
    action: POSTUntagMFADeviceActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

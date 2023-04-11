import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableMFADeviceActionEnum {
    EnableMFADevice = "EnableMFADevice"
}
export declare enum POSTEnableMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTEnableMFADeviceRequest extends SpeakeasyBase {
    action: POSTEnableMFADeviceActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

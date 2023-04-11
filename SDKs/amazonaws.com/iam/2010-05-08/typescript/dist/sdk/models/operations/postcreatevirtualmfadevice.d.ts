import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVirtualMFADeviceActionEnum {
    CreateVirtualMFADevice = "CreateVirtualMFADevice"
}
export declare enum POSTCreateVirtualMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateVirtualMFADeviceRequest extends SpeakeasyBase {
    action: POSTCreateVirtualMFADeviceActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVirtualMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVirtualMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

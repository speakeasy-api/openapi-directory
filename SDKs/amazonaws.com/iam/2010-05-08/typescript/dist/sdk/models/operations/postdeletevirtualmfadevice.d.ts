import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVirtualMFADeviceActionEnum {
    DeleteVirtualMFADevice = "DeleteVirtualMFADevice"
}
export declare enum POSTDeleteVirtualMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteVirtualMFADeviceRequest extends SpeakeasyBase {
    action: POSTDeleteVirtualMFADeviceActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVirtualMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVirtualMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

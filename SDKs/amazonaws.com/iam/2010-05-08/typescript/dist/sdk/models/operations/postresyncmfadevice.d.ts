import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResyncMFADeviceActionEnum {
    ResyncMFADevice = "ResyncMFADevice"
}
export declare enum POSTResyncMFADeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTResyncMFADeviceRequest extends SpeakeasyBase {
    action: POSTResyncMFADeviceActionEnum;
    requestBody?: Uint8Array;
    version: POSTResyncMFADeviceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResyncMFADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

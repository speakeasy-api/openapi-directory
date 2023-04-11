import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListMFADeviceTagsActionEnum {
    ListMFADeviceTags = "ListMFADeviceTags"
}
export declare enum POSTListMFADeviceTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListMFADeviceTagsRequest extends SpeakeasyBase {
    action: POSTListMFADeviceTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListMFADeviceTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListMFADeviceTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListVirtualMFADevicesActionEnum {
    ListVirtualMFADevices = "ListVirtualMFADevices"
}
export declare enum POSTListVirtualMFADevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListVirtualMFADevicesRequest extends SpeakeasyBase {
    action: POSTListVirtualMFADevicesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListVirtualMFADevicesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListVirtualMFADevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

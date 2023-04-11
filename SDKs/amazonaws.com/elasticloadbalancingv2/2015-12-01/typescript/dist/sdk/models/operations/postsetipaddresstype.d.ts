import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}
export declare enum POSTSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTSetIpAddressTypeRequest extends SpeakeasyBase {
    action: POSTSetIpAddressTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetIpAddressTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetIpAddressTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

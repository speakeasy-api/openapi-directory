import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}
export declare enum POSTAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssignPrivateIpAddressesRequest extends SpeakeasyBase {
    action: POSTAssignPrivateIpAddressesActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssignPrivateIpAddressesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssignPrivateIpAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

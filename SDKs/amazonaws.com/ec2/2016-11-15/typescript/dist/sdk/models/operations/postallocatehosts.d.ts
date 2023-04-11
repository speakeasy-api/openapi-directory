import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAllocateHostsActionEnum {
    AllocateHosts = "AllocateHosts"
}
export declare enum POSTAllocateHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAllocateHostsRequest extends SpeakeasyBase {
    action: POSTAllocateHostsActionEnum;
    requestBody?: Uint8Array;
    version: POSTAllocateHostsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAllocateHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

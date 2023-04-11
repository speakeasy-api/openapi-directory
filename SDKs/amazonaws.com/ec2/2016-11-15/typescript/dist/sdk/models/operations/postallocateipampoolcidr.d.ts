import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAllocateIpamPoolCidrActionEnum {
    AllocateIpamPoolCidr = "AllocateIpamPoolCidr"
}
export declare enum POSTAllocateIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAllocateIpamPoolCidrRequest extends SpeakeasyBase {
    action: POSTAllocateIpamPoolCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTAllocateIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAllocateIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

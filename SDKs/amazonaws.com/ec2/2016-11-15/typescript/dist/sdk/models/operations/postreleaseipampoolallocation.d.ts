import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReleaseIpamPoolAllocationActionEnum {
    ReleaseIpamPoolAllocation = "ReleaseIpamPoolAllocation"
}
export declare enum POSTReleaseIpamPoolAllocationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTReleaseIpamPoolAllocationRequest extends SpeakeasyBase {
    action: POSTReleaseIpamPoolAllocationActionEnum;
    requestBody?: Uint8Array;
    version: POSTReleaseIpamPoolAllocationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReleaseIpamPoolAllocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

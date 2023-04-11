import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeletePublicIpv4PoolActionEnum {
    DeletePublicIpv4Pool = "DeletePublicIpv4Pool"
}
export declare enum POSTDeletePublicIpv4PoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeletePublicIpv4PoolRequest extends SpeakeasyBase {
    action: POSTDeletePublicIpv4PoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeletePublicIpv4PoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeletePublicIpv4PoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

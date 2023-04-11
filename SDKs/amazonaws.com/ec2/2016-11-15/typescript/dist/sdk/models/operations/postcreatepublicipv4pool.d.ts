import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreatePublicIpv4PoolActionEnum {
    CreatePublicIpv4Pool = "CreatePublicIpv4Pool"
}
export declare enum POSTCreatePublicIpv4PoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreatePublicIpv4PoolRequest extends SpeakeasyBase {
    action: POSTCreatePublicIpv4PoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreatePublicIpv4PoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreatePublicIpv4PoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

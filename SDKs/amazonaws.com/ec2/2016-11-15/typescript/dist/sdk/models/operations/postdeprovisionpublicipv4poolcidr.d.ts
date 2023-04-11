import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeprovisionPublicIpv4PoolCidrActionEnum {
    DeprovisionPublicIpv4PoolCidr = "DeprovisionPublicIpv4PoolCidr"
}
export declare enum POSTDeprovisionPublicIpv4PoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeprovisionPublicIpv4PoolCidrRequest extends SpeakeasyBase {
    action: POSTDeprovisionPublicIpv4PoolCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeprovisionPublicIpv4PoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeprovisionPublicIpv4PoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

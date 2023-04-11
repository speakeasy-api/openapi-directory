import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTProvisionPublicIpv4PoolCidrActionEnum {
    ProvisionPublicIpv4PoolCidr = "ProvisionPublicIpv4PoolCidr"
}
export declare enum POSTProvisionPublicIpv4PoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTProvisionPublicIpv4PoolCidrRequest extends SpeakeasyBase {
    action: POSTProvisionPublicIpv4PoolCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTProvisionPublicIpv4PoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTProvisionPublicIpv4PoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

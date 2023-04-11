import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETProvisionPublicIpv4PoolCidrActionEnum {
    ProvisionPublicIpv4PoolCidr = "ProvisionPublicIpv4PoolCidr"
}
export declare enum GETProvisionPublicIpv4PoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETProvisionPublicIpv4PoolCidrRequest extends SpeakeasyBase {
    action: GETProvisionPublicIpv4PoolCidrActionEnum;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the IPAM pool you would like to use to allocate this CIDR.
     */
    ipamPoolId: string;
    /**
     * The netmask length of the CIDR you would like to allocate to the public IPv4 pool.
     */
    netmaskLength: number;
    /**
     * The ID of the public IPv4 pool you would like to use for this CIDR.
     */
    poolId: string;
    version: GETProvisionPublicIpv4PoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETProvisionPublicIpv4PoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

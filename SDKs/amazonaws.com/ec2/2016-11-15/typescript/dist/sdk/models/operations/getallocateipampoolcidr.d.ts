import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAllocateIpamPoolCidrActionEnum {
    AllocateIpamPoolCidr = "AllocateIpamPoolCidr"
}
export declare enum GETAllocateIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAllocateIpamPoolCidrRequest extends SpeakeasyBase {
    action: GETAllocateIpamPoolCidrActionEnum;
    /**
     * <p>The CIDR you would like to allocate from the IPAM pool. Note the following:</p> <ul> <li> <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p> </li> <li> <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p> </li> </ul> <p>Possible values: Any available IPv4 or IPv6 CIDR.</p>
     */
    cidr?: string;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * A description for the allocation.
     */
    description?: string;
    /**
     * Exclude a particular CIDR range from being returned by the pool. Disallowed CIDRs are only allowed if using netmask length for allocation.
     */
    disallowedCidr?: string[];
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the IPAM pool from which you would like to allocate a CIDR.
     */
    ipamPoolId: string;
    /**
     * <p>The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:</p> <ul> <li> <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p> </li> <li> <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p> </li> </ul> <p>Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</p>
     */
    netmaskLength?: number;
    /**
     * A preview of the next available CIDR in a pool.
     */
    previewNextCidr?: boolean;
    version: GETAllocateIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAllocateIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

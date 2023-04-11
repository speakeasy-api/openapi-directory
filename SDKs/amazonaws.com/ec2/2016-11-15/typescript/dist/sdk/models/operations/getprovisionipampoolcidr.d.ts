import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETProvisionIpamPoolCidrActionEnum {
    ProvisionIpamPoolCidr = "ProvisionIpamPoolCidr"
}
/**
 * A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.
 */
export declare class GETProvisionIpamPoolCidrCidrAuthorizationContext extends SpeakeasyBase {
    message?: string;
    signature?: string;
}
export declare enum GETProvisionIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETProvisionIpamPoolCidrRequest extends SpeakeasyBase {
    action: GETProvisionIpamPoolCidrActionEnum;
    /**
     * The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.
     */
    cidr?: string;
    /**
     * A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option applies to public pools only.
     */
    cidrAuthorizationContext?: GETProvisionIpamPoolCidrCidrAuthorizationContext;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the IPAM pool to which you want to assign a CIDR.
     */
    ipamPoolId: string;
    /**
     * The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.
     */
    netmaskLength?: number;
    version: GETProvisionIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETProvisionIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

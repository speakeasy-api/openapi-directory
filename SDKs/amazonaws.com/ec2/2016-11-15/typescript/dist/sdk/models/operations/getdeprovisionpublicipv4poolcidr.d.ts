import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeprovisionPublicIpv4PoolCidrActionEnum {
    DeprovisionPublicIpv4PoolCidr = "DeprovisionPublicIpv4PoolCidr"
}
export declare enum GETDeprovisionPublicIpv4PoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeprovisionPublicIpv4PoolCidrRequest extends SpeakeasyBase {
    action: GETDeprovisionPublicIpv4PoolCidrActionEnum;
    /**
     * The CIDR you want to deprovision from the pool. Enter the CIDR you want to deprovision with a netmask of <code>/32</code>. You must rerun this command for each IP address in the CIDR range. If your CIDR is a <code>/24</code>, you will have to run this command to deprovision each of the 256 IP addresses in the <code>/24</code> CIDR.
     */
    cidr: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the pool that you want to deprovision the CIDR from.
     */
    poolId: string;
    version: GETDeprovisionPublicIpv4PoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeprovisionPublicIpv4PoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

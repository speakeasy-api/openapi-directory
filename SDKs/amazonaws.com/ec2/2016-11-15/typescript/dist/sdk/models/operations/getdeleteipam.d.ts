import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteIpamActionEnum {
    DeleteIpam = "DeleteIpam"
}
export declare enum GETDeleteIpamVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteIpamRequest extends SpeakeasyBase {
    action: GETDeleteIpamActionEnum;
    /**
     * <p>Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following:</p> <ul> <li> <p>Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes.</p> <note> <p>No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged.</p> </note> </li> <li> <p>Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes.</p> </li> <li> <p>Deletes all IPAM pools in private scopes.</p> </li> <li> <p>Deletes all non-default private scopes in the IPAM.</p> </li> <li> <p>Deletes the default public and private scopes and the IPAM.</p> </li> </ul>
     */
    cascade?: boolean;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the IPAM to delete.
     */
    ipamId: string;
    version: GETDeleteIpamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteIpamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

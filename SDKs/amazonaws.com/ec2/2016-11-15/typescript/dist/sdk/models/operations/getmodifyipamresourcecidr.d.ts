import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyIpamResourceCidrActionEnum {
    ModifyIpamResourceCidr = "ModifyIpamResourceCidr"
}
export declare enum GETModifyIpamResourceCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyIpamResourceCidrRequest extends SpeakeasyBase {
    action: GETModifyIpamResourceCidrActionEnum;
    /**
     * The ID of the current scope that the resource CIDR is in.
     */
    currentIpamScopeId: string;
    /**
     * The ID of the scope you want to transfer the resource CIDR to.
     */
    destinationIpamScopeId?: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.
     */
    monitored: boolean;
    /**
     * The CIDR of the resource you want to modify.
     */
    resourceCidr: string;
    /**
     * The ID of the resource you want to modify.
     */
    resourceId: string;
    /**
     * The Amazon Web Services Region of the resource you want to modify.
     */
    resourceRegion: string;
    version: GETModifyIpamResourceCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyIpamResourceCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

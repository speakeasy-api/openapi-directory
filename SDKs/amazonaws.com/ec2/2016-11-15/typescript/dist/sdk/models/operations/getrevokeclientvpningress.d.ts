import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeClientVpnIngressActionEnum {
    RevokeClientVpnIngress = "RevokeClientVpnIngress"
}
export declare enum GETRevokeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETRevokeClientVpnIngressRequest extends SpeakeasyBase {
    /**
     * The ID of the Active Directory group for which to revoke access.
     */
    accessGroupId?: string;
    action: GETRevokeClientVpnIngressActionEnum;
    /**
     * The ID of the Client VPN endpoint with which the authorization rule is associated.
     */
    clientVpnEndpointId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Indicates whether access should be revoked for all clients.
     */
    revokeAllGroups?: boolean;
    /**
     * The IPv4 address range, in CIDR notation, of the network for which access is being removed.
     */
    targetNetworkCidr: string;
    version: GETRevokeClientVpnIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

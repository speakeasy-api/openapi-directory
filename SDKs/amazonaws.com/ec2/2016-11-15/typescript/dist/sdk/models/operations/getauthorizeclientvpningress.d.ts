import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeClientVpnIngressActionEnum {
    AuthorizeClientVpnIngress = "AuthorizeClientVpnIngress"
}
export declare enum GETAuthorizeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAuthorizeClientVpnIngressRequest extends SpeakeasyBase {
    /**
     * The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.
     */
    accessGroupId?: string;
    action: GETAuthorizeClientVpnIngressActionEnum;
    /**
     * Indicates whether to grant access to all clients. Specify <code>true</code> to grant all clients who successfully establish a VPN connection access to the network. Must be set to <code>true</code> if <code>AccessGroupId</code> is not specified.
     */
    authorizeAllGroups?: boolean;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The ID of the Client VPN endpoint.
     */
    clientVpnEndpointId: string;
    /**
     * A brief description of the authorization rule.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IPv4 address range, in CIDR notation, of the network for which access is being authorized.
     */
    targetNetworkCidr: string;
    version: GETAuthorizeClientVpnIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

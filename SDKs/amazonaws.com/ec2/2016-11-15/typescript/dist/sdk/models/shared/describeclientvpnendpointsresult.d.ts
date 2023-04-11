import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The target network type.
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsAssociatedTargetNetworksNetworkTypeEnum {
    Vpc = "vpc"
}
/**
 * Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsAssociatedTargetNetworks extends SpeakeasyBase {
    networkId?: string;
    networkType?: DescribeClientVpnEndpointsResultClientVpnEndpointsAssociatedTargetNetworksNetworkTypeEnum;
}
/**
 * Information about the Active Directory, if applicable.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsActiveDirectory extends SpeakeasyBase {
    directoryId?: string;
}
/**
 * Information about the IAM SAML identity provider, if applicable.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsFederatedAuthentication extends SpeakeasyBase {
    samlProviderArn?: string;
    selfServiceSamlProviderArn?: string;
}
/**
 * Information about the authentication certificates, if applicable.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsMutualAuthentication extends SpeakeasyBase {
    clientRootCertificateChain?: string;
}
/**
 * The authentication type used.
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsTypeEnum {
    CertificateAuthentication = "certificate-authentication",
    DirectoryServiceAuthentication = "directory-service-authentication",
    FederatedAuthentication = "federated-authentication"
}
/**
 * Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a> in the <i>Client VPN Administrator Guide</i>.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptions extends SpeakeasyBase {
    activeDirectory?: DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsActiveDirectory;
    federatedAuthentication?: DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsFederatedAuthentication;
    mutualAuthentication?: DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsMutualAuthentication;
    type?: DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptionsTypeEnum;
}
/**
 * The status code.
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptionsStatusCodeEnum {
    Applying = "applying",
    Applied = "applied"
}
/**
 * The status of any updates to the client connect options.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptionsStatus extends SpeakeasyBase {
    code?: DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptionsStatusCodeEnum;
    message?: string;
}
/**
 * The options for managing connection authorization for new client connections.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptions extends SpeakeasyBase {
    enabled?: boolean;
    lambdaFunctionArn?: string;
    status?: DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptionsStatus;
}
/**
 * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsClientLoginBannerOptions extends SpeakeasyBase {
    bannerText?: string;
    enabled?: boolean;
}
/**
 * Information about the client connection logging options for the Client VPN endpoint.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsConnectionLogOptions extends SpeakeasyBase {
    cloudwatchLogGroup?: string;
    cloudwatchLogStream?: string;
    enabled?: boolean;
}
/**
 * <p>The state of the Client VPN endpoint. Possible states include:</p> <ul> <li> <p> <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks have been associated. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>available</code> - The Client VPN endpoint has been created and a target network has been associated. The Client VPN endpoint can accept connections.</p> </li> <li> <p> <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept connections.</p> </li> </ul>
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsStatusCodeEnum {
    PendingAssociate = "pending-associate",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The current state of the Client VPN endpoint.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsStatus extends SpeakeasyBase {
    code?: DescribeClientVpnEndpointsResultClientVpnEndpointsStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpointsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The transport protocol used by the Client VPN endpoint.
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsTransportProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The protocol used by the VPN session.
 */
export declare enum DescribeClientVpnEndpointsResultClientVpnEndpointsVpnProtocolEnum {
    Openvpn = "openvpn"
}
/**
 * Describes a Client VPN endpoint.
 */
export declare class DescribeClientVpnEndpointsResultClientVpnEndpoints extends SpeakeasyBase {
    associatedTargetNetworks?: DescribeClientVpnEndpointsResultClientVpnEndpointsAssociatedTargetNetworks[];
    authenticationOptions?: DescribeClientVpnEndpointsResultClientVpnEndpointsAuthenticationOptions[];
    clientCidrBlock?: string;
    clientConnectOptions?: DescribeClientVpnEndpointsResultClientVpnEndpointsClientConnectOptions;
    clientLoginBannerOptions?: DescribeClientVpnEndpointsResultClientVpnEndpointsClientLoginBannerOptions;
    clientVpnEndpointId?: string;
    connectionLogOptions?: DescribeClientVpnEndpointsResultClientVpnEndpointsConnectionLogOptions;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    dnsName?: string;
    dnsServers?: string[];
    securityGroupIds?: string[];
    selfServicePortalUrl?: string;
    serverCertificateArn?: string;
    sessionTimeoutHours?: number;
    splitTunnel?: boolean;
    status?: DescribeClientVpnEndpointsResultClientVpnEndpointsStatus;
    tags?: DescribeClientVpnEndpointsResultClientVpnEndpointsTags[];
    transportProtocol?: DescribeClientVpnEndpointsResultClientVpnEndpointsTransportProtocolEnum;
    vpcId?: string;
    vpnPort?: number;
    vpnProtocol?: DescribeClientVpnEndpointsResultClientVpnEndpointsVpnProtocolEnum;
}
/**
 * Success
 */
export declare class DescribeClientVpnEndpointsResult extends SpeakeasyBase {
    clientVpnEndpoints?: DescribeClientVpnEndpointsResultClientVpnEndpoints[];
    nextToken?: string;
}

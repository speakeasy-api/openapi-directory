import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClientVpnEndpointActionEnum {
    ModifyClientVpnEndpoint = "ModifyClientVpnEndpoint"
}
/**
 * The options for managing connection authorization for new client connections.
 */
export declare class GETModifyClientVpnEndpointClientConnectOptions extends SpeakeasyBase {
    enabled?: boolean;
    lambdaFunctionArn?: string;
}
/**
 * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
 */
export declare class GETModifyClientVpnEndpointClientLoginBannerOptions extends SpeakeasyBase {
    bannerText?: string;
    enabled?: boolean;
}
/**
 * Describes the client connection logging options for the Client VPN endpoint.
 */
export declare class GETModifyClientVpnEndpointConnectionLogOptions extends SpeakeasyBase {
    cloudwatchLogGroup?: string;
    cloudwatchLogStream?: string;
    enabled?: boolean;
}
/**
 * Information about the DNS server to be used.
 */
export declare class GETModifyClientVpnEndpointDNSServers extends SpeakeasyBase {
    customDnsServers?: string[];
    enabled?: boolean;
}
/**
 * Specify whether to enable the self-service portal for the Client VPN endpoint.
 */
export declare enum GETModifyClientVpnEndpointSelfServicePortalEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum GETModifyClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyClientVpnEndpointRequest extends SpeakeasyBase {
    action: GETModifyClientVpnEndpointActionEnum;
    /**
     * The options for managing connection authorization for new client connections.
     */
    clientConnectOptions?: GETModifyClientVpnEndpointClientConnectOptions;
    /**
     * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
     */
    clientLoginBannerOptions?: GETModifyClientVpnEndpointClientLoginBannerOptions;
    /**
     * The ID of the Client VPN endpoint to modify.
     */
    clientVpnEndpointId: string;
    /**
     * <p>Information about the client connection logging options.</p> <p>If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged:</p> <ul> <li> <p>Client connection requests</p> </li> <li> <p>Client connection results (successful and unsuccessful)</p> </li> <li> <p>Reasons for unsuccessful client connection requests</p> </li> <li> <p>Client connection termination time</p> </li> </ul>
     */
    connectionLogOptions?: GETModifyClientVpnEndpointConnectionLogOptions;
    /**
     * A brief description of the Client VPN endpoint.
     */
    description?: string;
    /**
     * Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have up to two DNS servers.
     */
    dnsServers?: GETModifyClientVpnEndpointDNSServers;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of one or more security groups to apply to the target network.
     */
    securityGroupId?: string[];
    /**
     * Specify whether to enable the self-service portal for the Client VPN endpoint.
     */
    selfServicePortal?: GETModifyClientVpnEndpointSelfServicePortalEnum;
    /**
     * The ARN of the server certificate to be used. The server certificate must be provisioned in Certificate Manager (ACM).
     */
    serverCertificateArn?: string;
    /**
     * <p>The maximum VPN session duration time in hours.</p> <p>Valid values: <code>8 | 10 | 12 | 24</code> </p> <p>Default value: <code>24</code> </p>
     */
    sessionTimeoutHours?: number;
    /**
     * <p>Indicates whether the VPN is split-tunnel.</p> <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the <i>Client VPN Administrator Guide</i>.</p>
     */
    splitTunnel?: boolean;
    version: GETModifyClientVpnEndpointVersionEnum;
    /**
     * The ID of the VPC to associate with the Client VPN endpoint.
     */
    vpcId?: string;
    /**
     * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p> <p>Valid Values: <code>443</code> | <code>1194</code> </p> <p>Default Value: <code>443</code> </p>
     */
    vpnPort?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

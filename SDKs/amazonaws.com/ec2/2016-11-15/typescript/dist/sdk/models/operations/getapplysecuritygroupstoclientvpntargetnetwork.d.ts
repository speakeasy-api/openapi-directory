import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETApplySecurityGroupsToClientVpnTargetNetworkActionEnum {
    ApplySecurityGroupsToClientVpnTargetNetwork = "ApplySecurityGroupsToClientVpnTargetNetwork"
}
export declare enum GETApplySecurityGroupsToClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
    action: GETApplySecurityGroupsToClientVpnTargetNetworkActionEnum;
    /**
     * The ID of the Client VPN endpoint.
     */
    clientVpnEndpointId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of the security groups to apply to the associated target network. Up to 5 security groups can be applied to an associated target network.
     */
    securityGroupId: string[];
    version: GETApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;
    /**
     * The ID of the VPC in which the associated target network is located.
     */
    vpcId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETApplySecurityGroupsToClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

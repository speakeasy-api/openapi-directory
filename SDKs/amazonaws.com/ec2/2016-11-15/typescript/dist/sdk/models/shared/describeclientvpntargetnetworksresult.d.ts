import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the target network association.
 */
export declare enum DescribeClientVpnTargetNetworksResultClientVpnTargetNetworksStatusCodeEnum {
    Associating = "associating",
    Associated = "associated",
    AssociationFailed = "association-failed",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * The current state of the target network association.
 */
export declare class DescribeClientVpnTargetNetworksResultClientVpnTargetNetworksStatus extends SpeakeasyBase {
    code?: DescribeClientVpnTargetNetworksResultClientVpnTargetNetworksStatusCodeEnum;
    message?: string;
}
/**
 * Describes a target network associated with a Client VPN endpoint.
 */
export declare class DescribeClientVpnTargetNetworksResultClientVpnTargetNetworks extends SpeakeasyBase {
    associationId?: string;
    clientVpnEndpointId?: string;
    securityGroups?: string[];
    status?: DescribeClientVpnTargetNetworksResultClientVpnTargetNetworksStatus;
    targetNetworkId?: string;
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeClientVpnTargetNetworksResult extends SpeakeasyBase {
    clientVpnTargetNetworks?: DescribeClientVpnTargetNetworksResultClientVpnTargetNetworks[];
    nextToken?: string;
}

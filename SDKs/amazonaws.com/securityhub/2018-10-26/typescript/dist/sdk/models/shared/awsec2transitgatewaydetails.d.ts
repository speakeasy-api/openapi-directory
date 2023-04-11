import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Amazon Web Services Amazon EC2 Transit Gateway that interconnects virtual private clouds (VPCs) and on-premises networks.
 */
export declare class AwsEc2TransitGatewayDetails extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: string;
    defaultRouteTableAssociation?: string;
    defaultRouteTablePropagation?: string;
    description?: string;
    dnsSupport?: string;
    id?: string;
    multicastSupport?: string;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: string;
}

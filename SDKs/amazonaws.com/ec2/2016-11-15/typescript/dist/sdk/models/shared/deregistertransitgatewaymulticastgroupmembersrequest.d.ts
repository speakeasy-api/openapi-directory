import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeregisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
}

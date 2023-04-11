import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
}

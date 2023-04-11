import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds: string[];
    transitGatewayMulticastDomainId: string;
}

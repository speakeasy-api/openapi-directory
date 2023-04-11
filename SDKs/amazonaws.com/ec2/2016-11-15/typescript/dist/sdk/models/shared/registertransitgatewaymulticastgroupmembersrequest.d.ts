import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds: string[];
    transitGatewayMulticastDomainId: string;
}

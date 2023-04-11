import { SpeakeasyBase } from "../../../internal/utils";
export declare class RevokeClientVpnIngressRequest extends SpeakeasyBase {
    accessGroupId?: string;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    revokeAllGroups?: boolean;
    targetNetworkCidr: string;
}

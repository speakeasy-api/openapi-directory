import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizeClientVpnIngressRequest extends SpeakeasyBase {
    accessGroupId?: string;
    authorizeAllGroups?: boolean;
    clientToken?: string;
    clientVpnEndpointId: string;
    description?: string;
    dryRun?: boolean;
    targetNetworkCidr: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
    clientVpnEndpointId: string;
    dryRun?: boolean;
    securityGroupIds: string[];
    vpcId: string;
}

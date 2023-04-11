import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyIpamResourceCidrRequest extends SpeakeasyBase {
    currentIpamScopeId: string;
    destinationIpamScopeId?: string;
    dryRun?: boolean;
    monitored: boolean;
    resourceCidr: string;
    resourceId: string;
    resourceRegion: string;
}

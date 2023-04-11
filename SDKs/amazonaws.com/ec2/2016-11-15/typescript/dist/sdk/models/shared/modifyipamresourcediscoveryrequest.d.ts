import { SpeakeasyBase } from "../../../internal/utils";
import { AddIpamOperatingRegion } from "./addipamoperatingregion";
import { RemoveIpamOperatingRegion } from "./removeipamoperatingregion";
export declare class ModifyIpamResourceDiscoveryRequest extends SpeakeasyBase {
    addOperatingRegions?: AddIpamOperatingRegion[];
    description?: string;
    dryRun?: boolean;
    ipamResourceDiscoveryId: string;
    removeOperatingRegions?: RemoveIpamOperatingRegion[];
}

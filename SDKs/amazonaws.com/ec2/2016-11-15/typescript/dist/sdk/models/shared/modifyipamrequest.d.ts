import { SpeakeasyBase } from "../../../internal/utils";
import { AddIpamOperatingRegion } from "./addipamoperatingregion";
import { RemoveIpamOperatingRegion } from "./removeipamoperatingregion";
export declare class ModifyIpamRequest extends SpeakeasyBase {
    addOperatingRegions?: AddIpamOperatingRegion[];
    description?: string;
    dryRun?: boolean;
    ipamId: string;
    removeOperatingRegions?: RemoveIpamOperatingRegion[];
}

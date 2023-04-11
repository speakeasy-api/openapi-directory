import { SpeakeasyBase } from "../../../internal/utils";
import { RegionOptStatusEnum } from "./regionoptstatusenum";
/**
 * This is a structure that expresses the Region for a given account, consisting of a name and opt-in status.
 */
export declare class Region extends SpeakeasyBase {
    regionName?: string;
    regionOptStatus?: RegionOptStatusEnum;
}

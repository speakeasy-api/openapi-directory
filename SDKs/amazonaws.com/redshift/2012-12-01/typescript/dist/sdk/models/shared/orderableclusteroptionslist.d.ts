import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";
/**
 * Describes an orderable cluster option.
**/
export declare class OrderableClusterOptionsList extends SpeakeasyBase {
    availabilityZones?: AvailabilityZoneList[];
    clusterType?: string;
    clusterVersion?: string;
    nodeType?: string;
}

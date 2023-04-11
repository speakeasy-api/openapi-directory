import { SpeakeasyBase } from "../../../internal/utils";
import { AutoSnapshotDetails } from "./autosnapshotdetails";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Success
 */
export declare class GetAutoSnapshotsResult extends SpeakeasyBase {
    autoSnapshots?: AutoSnapshotDetails[];
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
}

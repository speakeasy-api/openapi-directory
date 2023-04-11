import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationInfo } from "./destinationinfo";
import { ExportSnapshotRecordSourceInfo } from "./exportsnapshotrecordsourceinfo";
import { RecordStateEnum } from "./recordstateenum";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes an export snapshot record.
 */
export declare class ExportSnapshotRecord extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    destinationInfo?: DestinationInfo;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    sourceInfo?: ExportSnapshotRecordSourceInfo;
    state?: RecordStateEnum;
}

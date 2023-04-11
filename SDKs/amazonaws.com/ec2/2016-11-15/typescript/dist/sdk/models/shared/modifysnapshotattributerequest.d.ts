import { SpeakeasyBase } from "../../../internal/utils";
import { CreateVolumePermissionModifications } from "./createvolumepermissionmodifications";
import { OperationTypeEnum } from "./operationtypeenum";
import { SnapshotAttributeNameEnum } from "./snapshotattributenameenum";
export declare class ModifySnapshotAttributeRequest extends SpeakeasyBase {
    attribute?: SnapshotAttributeNameEnum;
    createVolumePermission?: CreateVolumePermissionModifications;
    dryRun?: boolean;
    groupNames?: string[];
    operationType?: OperationTypeEnum;
    snapshotId: string;
    userIds?: string[];
}

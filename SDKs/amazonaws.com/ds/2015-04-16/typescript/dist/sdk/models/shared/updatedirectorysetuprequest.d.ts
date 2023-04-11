import { SpeakeasyBase } from "../../../internal/utils";
import { OSUpdateSettings } from "./osupdatesettings";
import { UpdateTypeEnum } from "./updatetypeenum";
export declare class UpdateDirectorySetupRequest extends SpeakeasyBase {
    createSnapshotBeforeUpdate?: boolean;
    directoryId: string;
    osUpdateSettings?: OSUpdateSettings;
    updateType: UpdateTypeEnum;
}

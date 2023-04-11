import { SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class SettingDataModel extends SpeakeasyBase {
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    hint?: string;
    isWatching?: boolean;
    key?: string;
    name?: string;
    order?: number;
    settingId?: number;
    settingType?: SettingTypeEnum;
}
